import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const body = await request.json();
        const { user_id, user_name, product_name, product_image, product_id, total, pay_method } = body;
        
        if (!user_id || !user_name || !product_name || !product_image || !product_id || !total || !pay_method) {
            return new Response(JSON.stringify({ erro: "campos inválidos" }))
        }
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await connection.execute(`INSERT INTO request (user_id, user_name, product_name, product_image, product_id, total, pay_method) VALUES (?, ?, ?, ?, ?, ?, ?)`, [user_id, user_name, product_name, product_image, product_id, total, pay_method]);

        await connection.end();
        return NextResponse.json({ message: "compra realizada com sucesso", success: true, rows }, { status: 201 })

    } catch (erro) {
        console.error("Error inserting into the database", erro);
        return NextResponse.json({ message: "compra não realizada", success: false }, { status: 400 })
    }
}
