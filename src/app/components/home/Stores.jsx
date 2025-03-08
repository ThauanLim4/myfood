"use client"
import "@/app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
export const StoresComponent = () => {
    const itensCategoriesClass = "flex flex-col justify-center items-center text-center w-32 h-28 mt-2";
    const [storesData, setStoresData] = useState([]);

    useEffect(async () => {
        const getStores = await fetch("/api/stores");
        const result = await getStores.json();
        setStoresData(result);
        console.log(result);
    }, [])

    return (
        <div>
            <div className="text-start">
                <div className="flex items-center gap-3 w-full h-56 max-sm:overflow-x-scroll max-md:overflow-x-scroll max-lg:overflow-x-scroll">
                    {storesData ?
                        storesData.map((item, index) => {
                            return (
                                <div key={index} className="hover:shadow-sombrainterna">
                                    <Link href={`pages/store/${item.name.trim().toLocaleLowerCase()}?storeid=${item.id}`} className="grid grid-rows-0.7/0.3-rows items-center justify-center gap-3 hover:bg-verdeclaro transition-all duration-300 rounded-lg">
                                        <div className={`${itensCategoriesClass} rounded-b-full`}>
                                            <img className="min-w-28 min-h-28 rounded-full" src={item.image} width={100} height={100} alt="" />
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