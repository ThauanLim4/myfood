import { FaPix, FaCreditCard, FaMoneyBill } from "react-icons/fa6";
import { useState } from "react";
import { PurchaseSucessPopupComponent } from "../ComponentsDefault/purchaseSucessPopupComponent";
export const CheckoutComponent = ({ variableName, userInfos }) => {

    const [userPurchaseInfos, setUserPurchaseInfos] = useState([userInfos]);
    const total = variableName.reduce((acc, item) => acc + item.unit_price * item.quanty, 0);
    const quantyProducts = variableName.reduce((acc, item) => acc + item.quanty, 0);
    const [methodPayment, setMethodPayment] = useState("");

    const [showPopup, setShowPopup] = useState(false);


    const purchaseProducts = async () => {
        if (!methodPayment) return alert("Selecione um método de pagamento");
        try {
            const response = await fetch("http://localhost:3000/api/mysql/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userPurchaseInfos[0].id,
                    user_name: userPurchaseInfos[0].user_name,
                    products: variableName.map(prod => ({
                        product_id: prod.product_id,
                        product_name: prod.product_name,
                        product_image: prod.product_image,
                        unit_price: prod.unit_price,
                        quanty: prod.quanty,
                    })),
                    total: total,
                    pay_method: methodPayment
                }),
            });
            if (response.status === 201) {
                setShowPopup(true);
                setTimeout(() => {
                    clearCart();
                }, 3000)
            }
        } catch (error) { }
    }

    const clearCart = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/mysql/cart/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userPurchaseInfos[0].id,
                }),
            });
        } catch (erro) {
            console.log("erro")
        }

        window.location.href = "/";
    }


    return (
        <div className="mb-16 w-full">
            <div className="overflow-y-auto overscroll-y-auto mb-24 max-w-screen-lg mx-auto flex flex-col gap-5 h-screen">
                {variableName.map((it, ind) => {
                    return (
                        <span key={ind}>
                            <div className="grid grid-cols-2-cols border-2 border-gray-500/25 gap-5 hover:shadow-sombra cursor-pointer w-full max-sm:max-w-96 max-w-xl h-full max-h-28 mx-auto p-2 rounded-lg">
                                <img className="imgsCheckoutComponent" src={it.product_image} />
                                <div className="flex flex-col justify-center gap-1">
                                    <h3 className="font-medium first-letter:uppercase">{it.product_name}</h3>
                                    <span>R$ {it.unit_price && it.unit_price.toFixed(2).replace(".", ",")}</span>
                                    <div className="flex items-center gap-3">
                                        <span>Quant. {it.quanty}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start mt-5 fixed bottom-0 left-0 right-0 max-w-sm border-t-2 border-gray-500/25 mx-auto p-3 bg-verdeclaro">
                                <h2 className="font-semibold flex gap-5">
                                    Total de ítens:  R${total.toFixed(2).replace(".", ",")} <hr />
                                </h2>
                                <span c className="font-semibold flex gap-5">Quantidade: {quantyProducts}x</span>
                                <span className="font-semibold flex gap-5">
                                    Método de pagamento: {methodPayment ? methodPayment : "Nenhum método selecionado"}
                                </span>
                                <button className="btnDefault1 text-center w-full my-5" onClick={purchaseProducts}>Finalizar pedido</button>
                            </div>
                        </span>
                    )
                })}

                <div className="text-center mx-auto w-full">
                    <h2 className="text-xl font-semibold mb-5">Métodos de pagamento</h2>

                    {showPopup ? <PurchaseSucessPopupComponent PopUpMsg="Compra realizada com sucesso!" /> : null}

                    <ul className="flex flex-col items-center gap-3 max-sm:max-w-64 max-w-xl mx-auto">
                        <li className="btnDefault1 flex items-center gap-3 w-full" onClick={eve => setMethodPayment("cartão de crédito")}>
                            <FaCreditCard className="text-cordocartao" /> Cartão de crédito
                        </li>
                        <li className="btnDefault1 flex items-center gap-3 w-full" onClick={eve => setMethodPayment("pix")}>
                            <FaPix className="text-cordopix" /> Pix
                        </li>
                        <li className="btnDefault1 flex items-center gap-3 w-full" onClick={eve => setMethodPayment("dinheiro")}>
                            <FaMoneyBill className="text-cordodinheiro" /> Dinheiro
                        </li>
                    </ul>
                </div>
            </div>


        </div>

    )
}  