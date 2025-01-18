import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        console.log("Dados recebidos:", { name, email, password });

        if (!name || !email || !password) {
            return new NextResponse.json({ erro: "erro em alguma coisa" }, { status: 400 })
        }

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });

        const [rows] = await connection.execute(
            `INSERT INTO user (user_name, user_email, user_password) VALUES (?, ?, ?)`, [name, email, password]);
        await connection.end();

        return NextResponse.json({ message: "Usuário criado com sucesso", success: true }, { status: 201 })
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}