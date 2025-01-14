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
        
        if (!user_id || !product_name || !product_image || !product_id || !store_id || !quanty || !unit_price || !total_price) {
            return new Response(JSON.stringify({ erro: "campos inválidos" }))
        }
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await connection.execute(`INSERT INTO cart (user_id, product_name, product_image, product_id, store_id, quanty, unit_price, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [user_id, product_name, product_image, product_id, store_id, quanty, unit_price, total_price]);

        await connection.end();
        return NextResponse.json({ message: "adicionado ao carrinho com sucesso", success: true, rows }, { status: 201 })

    } catch (erro) {
        console.error("Error inserting into the database", erro);
        return NextResponse.json({ message: "não foi adicionado ao carrinho", success: false }, { status: 400 })
    }
}

export async function PUT(request) {
    try {
        const body = await request.json();
        const { id } = body;
        if ( !id) {
            return new Response(JSON.stringify({ erro: "campos inválidos" }))
        }
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await connection.execute(`UPDATE cart SET quanty = quanty + 1 WHERE id = ?`, [id]);

        await connection.end();
        return NextResponse.json({ message: "produto atualizado com sucesso", success: true, rows }, { status: 201 })

    } catch (erro) {
        console.error("Error inserting into the database", erro);
        return NextResponse.json({ message: "não foi adicionado ao carrinho", success: false }, { status: 400 })
    }
}

export async function DELETE(request) {
    try {
        const body = await request.json();
        const { id } = body;
        if (!id) {
            return new Response(JSON.stringify({ erro: "campos inválidos" }))
        }
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await connection.execute(`DELETE FROM cart WHERE id = ${id}`);

        await connection.end();
        return NextResponse.json({ message: "produto removido com sucesso", success: true, rows }, { status: 200 })

    } catch (erro) {
        return NextResponse.json({ message: "não foi removido do carrinho", success: false }, { status: 400 })
    }
}