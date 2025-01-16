import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}

export async function GET() {
    try {
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await connection.execute("SELECT * FROM request");

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
        const { user_id, user_name, products, total, pay_method } = body;
        
        if (!user_id || !user_name || !products || !total || !pay_method) {
            return new Response(JSON.stringify({ erro: "campos inválidos" }))
        }
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await connection.execute(`INSERT INTO request (user_id, user_name, total, pay_method) VALUES (?, ?, ?, ?)`, [user_id, user_name, total, pay_method]);

        const requestId = rows.insertId;

        for (const product of products) {
            await connection.execute(`INSERT INTO request_items (request_id, product_id, product_name, product_image, unit_price, quanty ) VALUES (?, ?, ?, ?, ?, ?)`,[ requestId, product.product_id, product.product_name, product.product_image, product.unit_price, product.quanty]);
        }

        await connection.end();
        return NextResponse.json({ message: "compra realizada com sucesso", success: true, rows }, { status: 201 })

    } catch (erro) {
        console.error("Error inserting into the database", erro);
        return NextResponse.json({ message: "compra não realizada", success: false }, { status: 400 })
    }
}
