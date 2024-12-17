"use client";

import { useState, useEffect } from "react";
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
            <h2 className="text-xl">Veja lojas disponiveis</h2>

            {Stores.map((it, ind) => {
                return (
                    <div key={ind} className=" max-h-40 border border-r-0 border-l-0 border-gray-500/25 flex p-3 gap-5 my-5 hover:shadow-lg hover:cursor-pointer">
                        <img className="object-contain" width={150} height={150} src={it.storeImages} />
                        <div>
                            <h3 className="text-xl">{it.name}</h3>
                            <div className="flex items-center gap-3"><FaStar className="text-yellow-300" /> {it.stars.toFixed(1)}</div>
                            <div> ped.min. R${it.freight.toFixed(2)}</div>
                            <div><span className="bg-gray-500/25 p-1">{it.type}</span></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}