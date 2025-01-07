import mysql from "mysql2/promise"
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute("SELECT * FROM favorite");

        await conection.end();
        return NextResponse.json(rows);
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { store_id, store_name, store_image, user_authentication_key } = body;

        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute(`INSERT INTO favorite (store_id, store_name, store_image, user_authentication_key) VALUES (?, ?, ?, ?)`, [store_id, store_name, store_image, user_authentication_key]);

        return NextResponse.json({ message: "adicionado ao carrinho com sucesso", success: true, rows }, { status: 201 })

    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}