import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await connection.execute("SELECT * FROM cart");

        await connection.end();
        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error connecting to the database", error);
        return NextResponse.json({ error: "Error connecting to the database" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { user_id, product_name, product_image, product_id, store_id, quanty, unit_price, total_price } = body;

        if (!user_id && !product_name && !product_image && !product_id && !store_id && !quanty && !unit_price && !total_price) {
            return new Response(JSON.stringify({ erro: "campos inválidos" }))
        }

        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute(`INSERT INTO cart (user_id, product_name, product_image product_id, store_id, quanty, unit_price, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [user_id, product_name, product_image, product_id, store_id, quanty, unit_price, total_price]);

        return NextResponse.json({ message: "adicionado ao carrinho com sucesso", success: true, rows }, { status: 201 })

    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}