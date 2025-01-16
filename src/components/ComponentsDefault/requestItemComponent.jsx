import { FaPix, FaCreditCard, FaMoneyBill } from "react-icons/fa6";
import { useState } from "react";
{/* <FaCreditCard className="text-cordocartao" />
<FaPix className="text-cordopix" />
<FaMoneyBill className="text-cordodinheiro" /> */}
export const RequestItemComponent = ({ requestItens, requestInfos }) => {

    const pay_method = requestInfos[0].data;

    return (
        <div className="mt-10 mb-16">
            <div className="grid grid-cols-2 max-w-screen-lg mx-auto max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
                {
                    requestItens.map((it, ind) => {
                        return (
                            <div key={ind} className="grid grid-cols-2-cols border border-gray-500/25 rounded-lg gap-5 hover:shadow-sombra cursor-pointer w-full max-w-96 h-32max-h-36 mx-auto p-2">
                                <img className="imgs" src={it.product_image} alt={`foto de ${it.category}, ${it.food}`} />
                                <div className="flex flex-col justify-center gap-1">
                                    <span className="text-xs flex items-center gap-1">pedido feito: {new Intl.DateTimeFormat('pt-BR').format(new Date(requestInfos[0].data))} 
                                        {pay_method === 'pix' ? <FaPix className="text-cordopix" /> : pay_method === 'dinheiro' ? <FaMoneyBill className="text-cordodinheiro" /> : <FaCreditCard className="text-cordocartao" />}
                                    </span>
                                    <h3 className="text-base first-letter:uppercase">{it.product_name}</h3>
                                    <span>R$ {it.unit_price && it.unit_price.toFixed(2).replace(".", ",")}</span>
                                    <span>{it.quanty} unidade{it.quanty > 1 ? 's' : ''}</span>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}