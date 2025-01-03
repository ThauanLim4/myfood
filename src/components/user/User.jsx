import { FaHeart, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { PiNewspaperClipping } from "react-icons/pi";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import user from "../../../public/user.svg"
import Link from "next/link";
import Image from "next/image";

export const User = () => {
    const [userLogged, setUserLogged] = useState(false);
    const [usersInfos, setUsersInfo] = useState({});
    useEffect(() => {
        const tokenUser = localStorage.getItem("token");
        if (tokenUser) {
            setUserLogged(true);
        }
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/mysql/users');
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                console.log(result)
                const resultUser = result.rows.find((it) => it.authentication_key === tokenUser);
                console.log(resultUser)
                setUsersInfo(resultUser);
                console.log(resultUser)

            } catch (erro) {

            }
        }
        fetchUser();

    }, [])

    const itensClass = "flex gap-3 text-xl py-2 border-b-2 border-gray-500/25 justify-between items-center cursor-pointer";
    return (
        <div>
            <ul className="flex flex-col gap-5">
                {userLogged ?
                    <div className="flex gap-5 items-center">
                        <Image className="max-w-20" src={user} alt="imagem do usuário logado" />
                        <h3 className="text-2xl">{usersInfos.user_name}</h3>
                    </div>
                    :
                    <Link href={"/login"}>
                        <li className={itensClass}><CiLogin /> {userLogged ? "Logado" : "login"} </li>
                    </Link>}

                {userLogged && <>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><FaHeart /> Favoritos</span> 
                        <SlArrowRight className="text-xs" />
                    </li>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><FaShoppingCart /> Adicionados ao carrinho</span> 
                        <SlArrowRight className="text-xs" />
                    </li>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><PiNewspaperClipping /> Pedidos</span> 
                        <SlArrowRight className="text-xs" />
                    </li>
                </>}
            </ul>
        </div>
    )
};