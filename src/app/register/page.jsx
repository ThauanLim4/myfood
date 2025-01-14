"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderDefault } from "@/components/ComponentsDefault/header";
import createaccount from "../../../public/create_account.svg";

import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { InputText } from "@/components/ComponentsDefault/inputText";

const Register = () => {
    const [users, setUsers] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const addUser = async (eve) => {
        try {
            const response = await fetch('/api/mysql/user', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            const data = await response.json();
            setUsers([...users, data]);
            console.log(data)
            if (response.ok) {
                console.log("usuário criado com sucesso");
                window.location.href = "/login";
            } else {
                console.log("Erro ao criar usuário");
            }

        } catch (erro) {

        }
    }

    return (
        <div className="max-w-screen-lg mx-auto">
            <HeaderDefault nameLocation={"Registrar"} />
            <div className="p-5 grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 gap-5">
                <Image src={createaccount} alt="login" className="mx-auto" />

                <h2 className="text-3xl font-semibold mb-10">Crie Sua Conta</h2>

                <form method="post" className="flex flex-col items-center justify-center gap-5 border-b-2 border-gray-500/25 mx-auto w-full">
                    <InputText Icon={MdPerson} value={name} setValue={setName} placeholder={"Nome de usuário"} />

                    <InputText Icon={MdEmail} value={email} setValue={setEmail} placeholder={"Email"} />

                    <InputText Icon={MdPassword} value={password} setValue={setPassword} placeholder={"Senha"} />

                    <button type="submit" onClick={addUser} className="btnDefault1 mb-5 w-full">Criar conta</button>
                </form>
                <div>
                    <h1>Já possui uma conta? Então <Link href="/login" className="text-verdeescuro">faça login</Link></h1>
                </div>
            </div>
        </div>
    )
}

export default Register