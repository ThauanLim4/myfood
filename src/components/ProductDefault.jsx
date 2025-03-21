import { convertDiscount } from '@/helpers/convertDiscount';
import { convertPrice } from '@/helpers/convertPrice';
import Link from 'next/link';
import React from 'react';

export const ProductDefaultComponent = ({dataOfProducts, nameSectin}) => {
    return (
        <div>
            <h2 className="flex text-xl font-semibold p-3">Produtos</h2>

            {dataOfProducts
                ? <div className="mb-16">
                    <div className="grid grid-cols-3 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 p-3">
                        {
                            dataOfProducts.map((item, ind) => {
                                return (
                                    <div key={ind} className="grid grid-cols-0.3/0.7-cols max-sm:border-b-2 gap-5 hover:shadow-sombra w-full h-full max-w-96 min-h-28 max-h-28 mx-auto border border-verdeescuro rounded-lg transition-all duration-300 overflow-hidden">
                                        <div className="w-full h-full min-h-28 max-h-28 flex self-center bg-verdeclaro">
                                            <img className="w-full h-full object-contain flex self-center p-1" src={item.image} alt={`foto de ${item.category}, ${item.name}`} />
                                        </div>
                                        <div className="flex flex-col w-full justify-start gap-1">
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
                </div> : <></>}
        </div>
    )

}
