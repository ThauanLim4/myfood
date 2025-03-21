"use client";
import { useEffect, useState } from "react";
import { FaStar, FaTruck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { StoreComponent } from "@/components/ComponentsDefault/storeComponents";
import '@/app/globals.css';
import { useSearchParams } from "next/navigation";
import { ProductDefaultComponent } from "@/components/ProductDefault";
import { HeaderNavigation } from "@/components/HeaderNavigation";
import { MenuFilterComponent } from "./components/MenuFilter";


const FoodCategory = () => {
    const [categoryData, setCategoryData] = useState();
    const [productsData, setProductsData] = useState([]);
    const params = useSearchParams();
    const categoryId = params.get('categoryid');

    useEffect(async () => {
        if (!categoryId) {
            console.error("No category");
            return;
        }
        const products = await fetch("/api/products");
        const categoryInfos = await fetch("/api/categories");
        const result = await products.json();
        const resultCategoryInfos = await categoryInfos.json();
        if (resultCategoryInfos) {
            const categoryFiltered = resultCategoryInfos.filter(category => category.id === categoryId);
            setCategoryData(categoryFiltered);
        }
        if (result) {
            const productsFiltered = result.filter(product => product.categoryId === categoryId);
            setProductsData(productsFiltered);
        }
    }, [categoryId]);

    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderNavigation location={categoryData && categoryData[0]?.name} />
            <div className="flex flex-col w-full mt-3">

                <div className="w-full">
                    <div>
                        <MenuFilterComponent />
                    </div>

                    {productsData.length > 0
                        ? <ProductDefaultComponent dataOfProducts={productsData} nameSection={categoryData[0]?.name} />
                        : <></>}
                </div>

            </div>
        </div>
    )
}

export default FoodCategory;