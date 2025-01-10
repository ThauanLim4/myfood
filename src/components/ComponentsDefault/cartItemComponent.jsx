"use client";
import "@/app/globals.css";
import { useState, useEffect } from "react";

export const CartItemComponent = ({ variableName }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = variableName.reduce((acc, item) => acc + item.unit_price, 0);
        setTotal(totalPrice);
        console.log(totalPrice);
    }, [variableName]);

    return (
        <div className="mb-16">
            <div className="grid grid-cols-2 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
                {
                    variableName.map((it, ind) => {
                        return (
                            <div key={ind} className="grid grid-cols-2-cols max-sm:border-b-2 border-gray-500/25 gap-3 hover:shadow-sombra cursor-pointer w-full max-w-96 h-32max-h-36 mx-auto p-2">
                                <img className="max-w-16 max-h-16 mx-auto flex self-center" src={it.product_image} />
                                <div className="flex flex-col justify-center gap-1">
                                    <h3 className="text-base first-letter:uppercase">{it.product_name}</h3>
                                    <div className="flex gap-3 items-center">
                                        <button className="btnDefaultCart">-</button>
                                        <span className="font-semibold">{it.quanty} x</span>
                                        <button className="btnDefaultCart">+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col items-start mt-5 fixed bottom-0 left-0 right-0 max-w-sm border-t-2 border-gray-500/25 mx-auto p-3">
                <h2 className="font-semibold flex gap-5">Total de ítens: R${total.toFixed(2).replace(".", ",")} <hr /> Quantidade: {variableName.length}x</h2>
                <button className="btnDefault1 w-full my-5">Fechar pedido</button>
            </div>
        </div>
    )
}