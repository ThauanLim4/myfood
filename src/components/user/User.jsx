import { FaHeart, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { PiNewspaperClipping } from "react-icons/pi";
import { useEffect, useState } from "react";
import user from "../../../public/user.svg"
import Link from "next/link";
import Image from "next/image";

export const User = () => {
    const [userLogged, setUserLogged] = useState(false)
    useEffect(() => {
        const tokenUser = localStorage.getItem("token");
        if (tokenUser) {
            setUserLogged(true);
        }
    }, [])
    
    const itensClass = "flex gap-3 text-xl py-2 border-b-2 border-gray-500/25 justify-start items-center cursor-pointer";
    return (
        <div>
            <ul className="flex flex-col gap-5">
                {userLogged ? 
                <div>
                    <Image src={user} alt="imagem do usuário logado"/>

                </div>
                :
                <Link href={"/login"}>
                    <li className={itensClass}><CiLogin /> {userLogged ? "Logado" : "login"} </li>
                </Link>}
                {userLogged && <>
                    <li className={itensClass}><FaHeart /> Favoritos</li>
                    <li className={itensClass}><FaShoppingCart /> Adicionado ao carrinho</li>
                    <li className={itensClass}><PiNewspaperClipping /> Pedidos</li>
                </>}
            </ul>
        </div>
    )
};