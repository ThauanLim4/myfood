import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    try {
        const body = await request.json();
        const { user_id } = body;
        if (!user_id) {
            return new Response(JSON.stringify({ erro: "campos inválidos" }))
        }
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await connection.execute(`DELETE FROM cart WHERE user_id = ${user_id}`);

        await connection.end();
        return NextResponse.json({ message: "produto removido com sucesso", success: true, rows }, { status: 200 })

    } catch (erro) {
        return NextResponse.json({ message: "não foi removido do carrinho", success: false }, { status: 400 })
    }
}