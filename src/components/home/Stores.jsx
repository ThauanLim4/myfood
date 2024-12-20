"use client";

import { useState, useEffect } from "react";
import "@/app/globals.css";

import { FaStar } from "react-icons/fa";

export const StoresInitial = () => {
    const [Stores, setStores] = useState([]);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await fetch('/api/mysql/stores');
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                setStores(result)
            } catch (erro) {

            }
        }
        fetchStores();
    }, [])


    return (
        <div>
            <h2 className="text-xl font-semibold">Lojas disponiveis</h2>

            <div className="flex flex-row gap-x-3 max-md:flex-col">
                {Stores.map((it, ind) => {
                    return (
                        <div key={ind} className=" max-h-40 border border-gray-500/25 flex p-3 gap-5 my-5 hover:shadow-lg hover:cursor-pointer max-w-72">
                            <img className="object-cover roundedFull" src={it.storeImages ? it.storeImages : "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696916/Closed_Stores-bro_iqr7zd.svg"} />
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl">{it.storeName}</h3>
                                <div><span className="bg-amarelo px-1 text-xs">{it.type}</span></div>
                                <div className="flex items-center gap-3"><FaStar className="text-yellow-300" /> {it.stars.toFixed(1)}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}