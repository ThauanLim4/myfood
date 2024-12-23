"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const FoodsInitial = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await fetch('/api/mysql/foods');
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                setFoods(result)
            } catch (erro) {

            }
        }
        fetchFoods();
    }, [])


    return (
        <div>
            <h2 className="text-xl font-semibold">Mais pedidos no momento</h2>

            <div className="grid grid-cols-2 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 mt-10">
                {foods.map((it, ind) => {
                    return (
                        <div key={ind} className="grid grid-cols-2-cols max-h-40 max-sm:border-b-2 border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer">
                            <img className="imgs" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                            <div className="flex flex-col justify-center gap-1">
                                <h3 className="text-base first-letter:uppercase">{it.food}</h3>
                                <span>R$ {it.price.toFixed(2)}</span>
                                <Link href={`/item/${it.food}?itemid=${it.id}`} className="flex items-center justify-center text-black p-2 w-36 h-10 border border-verdeescuro hover:bg-verdeescuro hover:text-verdeclaro">Comprar</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}