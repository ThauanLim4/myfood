"use client";
import Image from "next/image";
import loginsvg from "../../../public/login.svg";
import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import Link from "next/link";
import { HeaderDefault } from "@/components/ComponentsDefault/header";

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [infosLogin, setInfosLogin] = useState([]);
    const [loginIsOk, setLoginIsOk] = useState(true);


    const verifyLogin = (eve) => {
        const login = async () => {
            try {
                const response = await fetch('/api/mysql/login');
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                const resultFilted = await result.filter(i => i.user_email === email && i.user_password === password);
                if (resultFilted.length == 0) {
                    return console.log("não existe usuario com esse email e senha")
                }
                setInfosLogin(resultFilted);
                console.log("login feito com sucesso", resultFilted);

                const tokenUser = resultFilted[0].authentication_key;

                if (resultFilted.length > 0 && tokenUser) {
                    localStorage.setItem("token", tokenUser);
                    window.location.href = '/';
                }
            } catch (erro) {
                console.log("erro ao conectar ao banco de dados", erro);
            }
        }

        login()
        eve.preventDefault();
    }

    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Login"} />
            <div className="p-5 grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 gap-5">
                <Image src={loginsvg} alt="login" className="mx-auto" />
                <form action="" method="post" className="flex flex-col items-center justify-center gap-5 border-b-2 border-gray-500/25 mx-auto w-full">
                    <h2 className="text-3xl font-semibold mb-10">Faça seu login</h2>
                    <div className="flex items-center border border-verdeescuro text-verdeescuro gap-2 p-2 rounded-lg w-full">
                        <MdEmail />
                        <input className="outline-none bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-verdeescuro w-full" type="text" name="search"
                            onChange={e => {
                                setEmail(e.target.value)
                            }}
                            value={email} placeholder="Email" />
                    </div>
                    <div className="flex items-center border border-verdeescuro text-verdeescuro gap-2 p-2 rounded-lg w-full">
                        <MdPassword />
                        <input className="outline-none bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-verdeescuro w-full" type="text" name="search"
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                            value={password} placeholder="Senha" />
                    </div>
                    <button type="submit" onClick={verifyLogin} className="btnDefault1 mb-5 w-full">Login</button>
                    {!loginIsOk ? <p className="text-red-500">login falhou</p> : ""}
                </form>
                <div>
                    <h1>Ainda não possui uma conta? Então <Link href="/register" className="text-verdeescuro">Cria conta</Link></h1>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;