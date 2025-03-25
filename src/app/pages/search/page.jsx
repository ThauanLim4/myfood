"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { ProductDefaultComponent } from "@/components/ProductDefault";
const SearchPage = () => {
    const [productsResultSearch, setProductsResultSearch] = useState([]);
    const getParams = useSearchParams();
    const searchResult = getParams.get("result");
    console.log(searchResult);

    useEffect(() => {
        if (!searchResult) {
            console.error("No search result provided");
            return;
        }
        const fetchDataProducts = async () => {
            try {
                const response = await fetch("/api/products");
                const resultProducts = await response.json();
                console.log(resultProducts);
                if (resultProducts) {
                    const resultProductsFiltered = resultProducts.filter(product => product.name.toLowerCase().includes(searchResult.toLowerCase()));
                    console.log(resultProductsFiltered);
                    setProductsResultSearch(resultProductsFiltered);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataProducts();
    }, [searchResult])

    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderNavigation location={"Busca"} />
            {productsResultSearch.length > 0
                ? <ProductDefaultComponent
                    dataOfProducts={productsResultSearch} nameSection={`Resultados Para ${searchResult}`} />
                : <></>}
        </div>
    )
}

export default SearchPage;