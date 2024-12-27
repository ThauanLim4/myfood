import { FaHeart, FaShoppingCart, FaArrowRight  } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { PiNewspaperClipping } from "react-icons/pi";

export const User = () => {
    const itensClass = "flex gap-3 text-xl py-2 border-b-2 border-gray-500/25 justify-start items-center cursor-pointer";
    return (
        <div>
            <ul className="flex flex-col gap-5">
                <li className={itensClass}><CiLogin /> Login </li>
                <li className={itensClass}><FaHeart /> Favoritos</li>
                <li className={itensClass}><FaShoppingCart /> Adicionado ao carrinho</li>
                <li className={itensClass}><PiNewspaperClipping /> Pedidos</li>
            </ul>
        </div>
    )
};