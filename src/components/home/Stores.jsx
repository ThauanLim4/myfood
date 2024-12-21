"use client";

import { useState, useEffect } from "react";
import "@/app/globals.css";

import { FaStar } from "react-icons/fa";
import Link from "next/link";

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

            <div className="mx-auto grid max-md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {Stores.map((it, ind) => {
                    return (
                        <div key={ind} className="border border-gray-500/25 p-3 gap-5 hover:shadow-lg hover:cursor-pointer storeContainer justify-self-center w-72 h-32 max-w-72 max-h-36">
                            <Link href={"link"} className="flex gap-3">
                                <img className="object-cover roundedFull" src={it.storeImages ? it.storeImages : "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696916/Closed_Stores-bro_iqr7zd.svg"} />
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl">{it.storeName}</h3>
                                    <div><span className="bg-amarelo px-1 text-xs">{it.type}</span></div>
                                    <div className="flex items-center gap-3"><FaStar className="text-yellow-300" /> {it.stars.toFixed(1)}</div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}