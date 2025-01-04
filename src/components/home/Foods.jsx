"use client";

import { useState, useEffect } from "react";
import { fetchAllFoods } from "@/app/api/utils/utilitys";
import Link from "next/link";

export const FoodsInitial = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const result = await fetchAllFoods();
                setFoods(result)
            } catch (erro) {}
        }
        fetchFoods();
    }, [])


    return (
        <div className="mt-10 mb-16">
            <h2 className="text-xl font-semibold">Mais pedidos no momento</h2>

            <div className="grid grid-cols-2 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 mt-10">
                {foods.map((it, ind) => {
                    return (
                        <div key={ind} className="grid grid-cols-2-cols max-sm:border-b-2 border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer w-full max-w-96 h-32max-h-36 mx-auto p-2">
                            <img className="imgs" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                            <div className="flex flex-col justify-center gap-1">
                                <h3 className="text-base first-letter:uppercase">{it.food}</h3>
                                <span>R$ {it.price.toFixed(2)}</span>
                                <Link href={`/item/${it.food}?itemid=${it.id}`} className="flex items-center justify-center p-2 w-36 h-10 btnDefault1">Comprar</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}