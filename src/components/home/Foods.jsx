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
            <h2 className="text-xl">Mais pedidos no momento</h2>

            {foods.map((it, ind) => {
                return (
                    <div key={ind} className="max-h-40 border border-r-0 border-l-0 border-gray-500/25 flex gap-5 my-5">
                        <img className="object-contain" width={150} height={150} src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                        <div className="flex flex-col">
                            <h3 className="text-xl">{it.food}</h3> 
                            <span>R$ {it.price.toFixed(2)}</span>
                        </div>
                        <Link href={`/item/${it.food}?itemid=${it.id}`} className="flex items-center justify-center bg-green-500 text-white p-2">Comprar</Link>
                    </div>
                )
            })}
        </div>
    )
}