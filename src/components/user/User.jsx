import { CiLogin } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { PiNewspaperClipping } from "react-icons/pi";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { RiAccountBoxLine } from "react-icons/ri";

import { fetchAllUsers } from "@/app/api/utils/utilitys";
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
                const result = await fetchAllUsers();
                const resultUser = result.rows.find(
                    (it) => it.authentication_key === tokenUser);
                setUsersInfo(resultUser);
            } catch (erro) {
                console.log("erro")
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
                        <Image className="max-w-16" src={user} alt="imagem do usuário logado" />
                        <h3 className="text-2xl">{usersInfos.user_name}</h3>
                    </div>
                    :
                    <Link href={"/login"}>
                        <li className={itensClass}><CiLogin /> {userLogged ? "Logado" : "login"} </li>
                    </Link>}

                {userLogged && <>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><IoIosHeartEmpty /> Favoritos</span>
                        <SlArrowRight className="text-xs" />
                    </li>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><LuShoppingCart /> Adicionados ao carrinho</span>
                        <SlArrowRight className="text-xs" />
                    </li>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><PiNewspaperClipping /> Pedidos</span>
                        <SlArrowRight className="text-xs" />
                    </li>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><CiLocationOn /> Endereço</span>
                        <SlArrowRight className="text-xs" />
                    </li>
                    <li className={itensClass}>
                        <span className="flex items-center gap-3"><RiAccountBoxLine /> Detalhes da conta</span>
                        <SlArrowRight className="text-xs" />
                    </li>
                </>}
            </ul>
        </div>
    )
};