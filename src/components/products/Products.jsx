"use client"
import "@/app/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";


export const ProductsComponent = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(async () => {
        const getProducts = await fetch("/api/products");
        const resultProducts = await getProducts.json();
        setProductsData(resultProducts);

        console.log(resultProducts);

    }, [])

    return (
        <div>
            {productsData
                ? <div className="mt-10 mb-16">
                    <div className="grid grid-cols-3 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
                        {
                            productsData.map((item, ind) => {
                                return (
                                    <div key={ind} className="grid grid-cols-0.3/0.7-cols max-sm:border-b-2 gap-5 hover:shadow-sombra cursor-pointer w-full max-w-96 h-32max-h-36 mx-auto p-2 border border-verdeescuro rounded-xl">
                                        <img className="min-w-24 min-h-24 max-h-24 max-w-24 object-contain"  src={item.image} alt={`foto de ${item.category}, ${item.name}`} />
                                        <div className="flex flex-col justify-center gap-1">
                                            <Link href={`/item/${item.name}?itemid=${item.id}`}>
                                                <h3 className="text-black text-lg font-semibold first-letter:uppercase">{item.name}</h3>
                                            </Link>
                                            <span>R$ {item.price}</span>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div> : null}
        </div>
    )
}
