"use client";
import { useState } from "react"
const Register = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/mysql/register', {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
    }

    return (
        <div className="p-5">
            <h1>Register</h1>
            <form action="" className="flex flex-col gap-5" method="post">
                <label htmlFor="name">Nome</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Senha</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit" onClick={registerUser}>Register</button>
            </form>
        </div>
    )
}

export default Register