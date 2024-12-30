"use client";
import Image from "next/image";
import loginsvg from "../../../public/login.svg";
import { useState, useEffect } from "react";
import Link from "next/link";

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [infosLogin, setInfosLogin] = useState([]);


    const [loginIsOk, setLoginIsOk] = useState(true);

    useEffect(() => {
        const login = async () => {
            try {
                const response = await fetch('/api/mysql/login');
                if (!response.ok) {
                    console.log('erro ao buscar o banco de dados')
                }
                const result = await response.json();
                const resultFilted = await result.filter(i => i.email === email && i.password === password);
                // if (resultFilted.length == 0) {
                //     return console.log("não existe usuario com esse email e senha")
                // }
                setInfosLogin(resultFilted);
                console.log(resultFilted)
            } catch (erro) {
                console.log("erro ao conectar ao banco de dados", erro);
            }
        }
        login()
    }, [])

    const verifyLogin = (eve) => {
        eve.preventDefault();
        console.log(infosLogin)
        if(infosLogin.length == 0) {
            setLoginIsOk(false);
        } else {
            window.location.href = '/store';
        }
    }

    return (
        <div className="p-5">
            <Image src={loginsvg} alt="login" />
            <form action="" method="post" className="flex flex-col gap-3">

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={verifyLogin}>Login</button>

                {!loginIsOk ? <p className="text-red-500">login falhou</p> : "" }
            </form>
            <hr />
            <div>   
                <Link href="/register">Cria conta</Link>
            </div>
            <h1 className="text-2xl">Login</h1>
        </div>
    )
}

export default LoginPage;