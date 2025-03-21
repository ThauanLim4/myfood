"use client";
import { useEffect, useState } from "react";
import { FaStar, FaTruck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { StoreComponent } from "@/components/ComponentsDefault/storeComponents";
import '@/app/globals.css';
import { useSearchParams } from "next/navigation";
import { ProductDefaultComponent } from "@/components/ProductDefault";

const FoodCategory = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";
    const [categoriesData, setCategoriesData] = useState([]);
    const params = useSearchParams();
    const categoryId = params.get('categoryid');

    useEffect(async () => {
        if (!categoryId) {
            console.error("No category");
            return;
        }
        const products = await fetch("/api/products");
        const result = await products.json();
        setCategoriesData(result);
        console.log(result);
    }, [categoryId]);



    // const searchItemByFreightFree = async () => {
    //     setOpenModalfilters(false);
    //     console.log(storesType)
    //     const resultFilted = storesType.filter(i => i.freight === 0);
    //     if (resultFilted) {
    //         console.log("lojas encontradas baseadas nos filtros", resultFilted);
    //         setStoresTypeFiltered(resultFilted);
    //     }
    // }
    // const searchItemByAvaliations = () => {
    //     setOpenModalfilters(false);
    //     console.log(storesType)
    //     const resultFilted = storesType.sort((i, j) => j.stars - i.stars);
    //     if (resultFilted) {
    //         console.log("lojas encontradas baseadas nos filtros", resultFilted);
    //         setStoresTypeFiltered(resultFilted);
    //     }

    // }

    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-around items-center mt-3">
                <div className="flex items-center gap-1 max-w-56">
                    <button className="flex items-center gap-1 font-semibold">Ordernar por <IoIosArrowDown /></button>

                        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10">
                            <div className=" fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-3/4 max-w-screen-md bg-verdeclaro z-10">
                                <div className="p-5 flex flex-col items-center gap-5 text-lg">
                                    <button className="btnDefault1 flex flex-col items-center">
                                        <FaTruck /> Frete Grátis
                                    </button>
                                    <button className="btnDefault1 flex flex-col items-center">
                                        <FaStar /> Avaliações
                                    </button>

                                </div>
                            </div>
                        </div>


                        <ProductDefaultComponent dataOfProducts={a} nameSectin={"lanches"} />

                </div>
            </div>
        </div>
    )
}

export default FoodCategory;