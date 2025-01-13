"use client";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
export const CartItemComponent = ({ variableName }) => {
    const [total, setTotal] = useState(0);
    const [quanty, setQuanty] = useState(1);
    console.log(variableName)

    useEffect(() => {
        const totalPrice = variableName.reduce((acc, item) => acc + item.unit_price, 0);
        setTotal(totalPrice);
        console.log(totalPrice);
    }, [variableName]);

    const AddAMOreItemOnCart = async (id) =>{
        console.log(variableName.quanty[id]);
        const result = await axios.put(`/api/mysql/cart`, {
            user_id: id,
            quanty: quanty + 1
        });

        console.log(result.status, " ", result.data)
    } 

    const RemoveAItemOfCart = () =>{
        
    } 

    const RemoveItemOfCart = () =>{

    }

    return (
        <div className="mb-16">
            <div className="overflow-y-auto overscroll-y-auto max-w-screen-lg mx-auto flex flex-col gap-5 h-screen">
                {variableName.map((it, ind) => {
                    return (
                        <div key={ind} className="grid grid-cols-2-cols border-2 border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer w-full max-w-96 h-full max-h-36 mx-auto p-2 rounded-lg">
                            <img className="imgs" src={it.product_image} />
                            <div className="flex flex-col justify-center gap-1">
                                <h3 className="font-medium first-letter:uppercase">{it.product_name}</h3>
                                <span>R$ {it.unit_price && it.unit_price.toFixed(2).replace(".", ",")}</span>
                                <div className="flex items-center gap-3">
                                    {it.quanty === 1 
                                    ? <button className="btnDefaultCart" onClick={e => RemoveItemOfCart}>
                                        <FaTrash className="text-xs" />
                                    </button>
                                    : <button className="btnDefaultCart" onClick={e => RemoveAItemOfCart}>
                                        <MdExposureNeg1 />
                                    </button>
                                    }
                                    <span>Quant. 1</span>
                                    <button className="btnDefaultCart" onClick={e => AddAMOreItemOnCart(it.id)}><MdExposurePlus1 /></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex flex-col items-start mt-5 fixed bottom-0 left-0 right-0 max-w-sm border-t-2 border-gray-500/25 mx-auto p-3 bg-verdeclaro">
                <h2 className="font-semibold flex gap-5">Total de ítens: R${total.toFixed(2).replace(".", ",")} <hr /> Quantidade: {variableName.length}x</h2>
                <button className="btnDefault1 w-full my-5">Fechar pedido</button>
            </div>
        </div>
    )
}