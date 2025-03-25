"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { ProductDefaultComponent } from "@/components/ProductDefault";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SearchPage = () => {
    const [productsResultSearch, setProductsResultSearch] = useState([]);
    const [filters, setFilters] = useState("");
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
                    const resultSearchProductsFiltered = resultProducts.filter(
                        product => product.name.toLowerCase().includes(searchResult.toLowerCase())
                    );

                    let sortedProducts = [...resultSearchProductsFiltered];
                    switch (filters) {
                        case "minPrice":
                            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
                            break;
                        case "maxPrice":
                            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
                            break;
                        case "discount":
                            sortedProducts = sortedProducts.filter(product => product.discount > 0);
                            sortedProducts = sortedProducts.sort((a, b) => b.discount - a.discount);
                            break;
                        default:
                            break;
                    }
                    setProductsResultSearch(sortedProducts);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchDataProducts();
    }, [searchResult, filters]);

    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderNavigation location={"Busca"} />

            <Select>
                <SelectTrigger className="flex mt-5 w-[180px] border-0 bg-transparent focus:outline-none">
                    <SelectValue className="text-black" placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="minPrice" onClick={() => setFilters("minPrice")}>
                        Menor Preço
                    </SelectItem>
                    <SelectItem value="maxPrice" onClick={() => setFilters("maxPrice")}>
                        Maior Preço
                    </SelectItem>
                    <SelectItem value="discount" onClick={() => setFilters("discount")}>
                        Desconto
                    </SelectItem>
                </SelectContent>
            </Select>

            {productsResultSearch.length > 0 ? (
                <ProductDefaultComponent
                    dataOfProducts={productsResultSearch}
                    nameSection={`Resultados Para ${searchResult}`}
                />
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-gray-500">Nenhum produto encontrado.</p>
                </div>
            )}
        </div>
    );
};

export default SearchPage;