"use client";
import { useState } from "react";
const Register = () => {

    const [users, setUsers] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [mensage, setMensage] = useState("");

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
        <div className="p-5">
            <div>
                <h1>Users</h1>

                <div className="flex flex-col gap-5">

                    <label htmlFor="user_name">Nome</label>
                    <input type="text" name="user_name" id="user_name" value={name} onChange={e => setName(e.target.value)} />

                    <label htmlFor="user_email">Email</label>
                    <input type="text" name="user_email" id="user_email" value={email} onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="user_password">Senha</label>
                    <input type="text" name="user_password" id="user_password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={addUser}>Criar usuário</button>
                </div>

                {mensage}
            </div>
        </div>
    )
}

export default Register