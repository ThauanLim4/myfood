import purchase_sucess from "../../../public/successful_purchase.svg";
import Image from "next/image";
export const PurchaseSucessPopupComponent = ({ PopUpMsg, functionClose=() => {} }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-verdeclaro flex flex-col justify-center items-center p-4 rounded-lg">
                <Image width={200} height={200} src={purchase_sucess} alt="svg de uma mulher segurando sacolas de compras" />
                <h2 className="text-lg font-bold mb-2">{PopUpMsg}</h2>
            </div>
        </div>
    )   
}