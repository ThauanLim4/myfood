"use client"
import "@/app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
export const CategoriesComponent = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28";
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(async () => {
        const getCategories = await fetch("/api/categories");
        const result = await getCategories.json();
        setCategoriesData(result);
        console.log(result);
    }, [])

    return (
        <div>
            <div className="text-start">
                <div className="flex items-center gap-3 w-full h-56 max-sm:overflow-x-scroll max-md:overflow-x-scroll max-lg:overflow-x-scroll">
                    {categoriesData ?
                        categoriesData.map((item, index) => {
                            return (
                                <div key={index} className="hover:shadow-sombrainterna">
                                    <Link href={`categorias/${item.name.trim().toLocaleLowerCase()}`} className="grid grid-rows-0.7/0.3-rows items-center justify-center gap-3 bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-lg">
                                        <div className={`${itensCategoriesClass} rounded-b-full`}>
                                            <img className="min-w-28 min-h-28" src={item.image} width={100} height={100} alt="" />
                                        </div>
                                        <h3 className="font-light text-ellipsis hover:text-verdeescuro hover:cursor-pointer text-center">{item.name}</h3>
                                    </Link>
                                </div>
                            )
                        }) : <></>}
                </div>
            </div>

        </div>
    )
}


