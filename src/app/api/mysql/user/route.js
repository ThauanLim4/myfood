import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        console.log("Dados recebidos:", {email, password})

        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute("SELECT INTO user WHERE user_email = ? AND user_password = ?", [email, password]);
        
        await conection.end();
        return Response.json({rows});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}



export async function POST(request) {
    try {
        const body = await request.json();
        const {name, email, password } = body;

        console.log("Dados recebidos:", { name, email, password });

        if(!name || !email || !password) {
            return new NextResponse.json({erro: "erro em alguma coisa"}, {status: 400})
        }
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await conection.execute(`INSERT INTO user (user_name, user_email, user_password) VALUES (?, ?, ?)`, [name, email, password]);
        await conection.end();
        
        return NextResponse.json({ message: "Usuário criado com sucesso", success: true }, { status: 201 })
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}