"use client";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";
import Link from "next/link";
import { api } from "@/app/api/utils/api";

export const CartItemComponent = ({ variableName }) => {
    const [total, setTotal] = useState(0);
    const [quantyProducts, setQuantyProducts] = useState(0);


    useEffect(() => {
        const totalPrice = variableName.reduce((acc, item) => acc + item.unit_price * item.quanty, 0);
        const totalOfProducts = variableName.reduce((acc, item) => acc + item.quanty, 0);

        setTotal(totalPrice);
        setQuantyProducts(totalOfProducts);
        console.log("total:", totalPrice, "quanty:", totalOfProducts);
    }, [variableName]);

    const AddMoreItemOnCart = async (id) => {
        const addMoreItemResponse = await api.put("/cart", { id, action: "+" });
        if (addMoreItemResponse.status === 201) {
            window.location.reload();
        }
    }

    const RemoveAItemOfCart = async (id) => {
        console.log("id do item no carrinho:", id);
        const addMoreItemResponse = await api.put("/cart", {id, action: "-"})

        if (addMoreItemResponse.status === 201) {
            window.location.reload();
        }
    }

    const RemoveItemOfCart = async (id) => {
        console.log("id:", id);
        const response = await api.delete("/cart", { 
            data: { id }
        });
        if (response.status === 200) {
            window.location.reload();
        }
    }

    return (
        <div className="mb-16 w-full">
            <div className="overflow-y-auto overscroll-y-auto mb-24 max-w-screen-lg mx-auto flex flex-col gap-5 h-screen">
                {variableName.map((it, ind) => {
                    return (
                        <span key={ind}>
                            <div className="grid grid-cols-2-cols border-2 border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer w-full max-sm:max-w-96 max-w-xl h-full max-h-36 mx-auto p-2 rounded-lg">
                                <img className="imgs" src={it.product_image} />
                                <div className="flex flex-col justify-center gap-1">
                                    <h3 className="font-medium first-letter:uppercase">{it.product_name}</h3>
                                    <span>R$ {it.unit_price && it.unit_price.toFixed(2).replace(".", ",")}</span>
                                    <div className="flex items-center gap-3">

                                        <button className="btnDefaultCart"
                                            onClick={e => it.quanty === 1 ? RemoveItemOfCart(it.id) : RemoveAItemOfCart(it.id)}>
                                            <MdExposureNeg1 />
                                        </button>

                                        <span>Quant. {it.quanty}</span>
                                        <button className="btnDefaultCart"
                                            onTouchStart={e => AddMoreItemOnCart(it.id)}
                                            onClick={e => AddMoreItemOnCart(it.id)}><MdExposurePlus1 />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start mt-5 fixed bottom-0 left-0 right-0 max-w-sm border-t-2 border-gray-500/25 mx-auto p-3 bg-verdeclaro">
                                <h2 className="font-semibold flex gap-5">Total de ítens: R${total.toFixed(2).replace(".", ",")} <hr /> Quantidade: {quantyProducts}x</h2>

                                <Link href={`/checkout`} className="btnDefault1 text-center w-full my-5">Fechar pedido</Link>
                            </div>
                        </span>
                    )
                })}
            </div>


        </div>
    )
}