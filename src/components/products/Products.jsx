"use client";
import "@/app/globals.css";
import { convertDiscount } from "@/helpers/convertDiscount";
import { convertPrice } from "@/helpers/convertPrice";
import Link from "next/link";
import { useEffect, useState } from "react";
export const ProductsComponent = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const getProducts = await fetch("/api/products");
            const resultProducts = await getProducts.json();
            setProductsData(resultProducts);
            console.log(resultProducts);
        };

        fetchProducts();
    }, []);



    return (
        <div>
            {productsData
                ? <div className="mt-10 mb-16">
                    <div className="grid grid-cols-3 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 p-3">
                        {
                            productsData.map((item, ind) => {
                                return (
                                    <div key={ind} className="grid grid-cols-0.3/0.7-cols max-sm:border-b-2 gap-5 hover:shadow-sombra w-full h-full max-w-96 min-h-32 max-h-32 mx-auto p-2 border border-verdeescuro rounded-lg bg-verdeclaro transition-all duration-300 overflow-hidden">
                                        <img className="min-w-24 min-h-24 max-h-24 max-w-24 object-contain flex self-center" src={item.image} alt={`foto de ${item.category}, ${item.name}`} />
                                        <div className="flex flex-col w-full justify-center gap-1">
                                            <Link href={`/pages/product/${item.name.toLowerCase().replace(/\s+/g, "-")}?prodid=${item.id}`} className="hover:cursor-pointer">
                                                <h3 className="text-black first-letter:uppercase">{item.name}</h3>
                                            </Link>
                                            {item.discontPorcent > 0 ? (
                                                <div>
                                                    <span className="text-sm font-semibold text-pink-900 line-through">{convertPrice(item.price)}</span>
                                                    <p className='text-lg font-bold text-verdeescuro'>{convertDiscount(item.price, item.discontPorcent)}</p>
                                                </div>
                                            ) : <p className='text-lg font-bold text-primary'>{convertPrice(item.price)}</p>}

                                            <p className="text-ellipsis overflow-hidden line-clamp-1">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div> : null}
        </div>
    )
}
