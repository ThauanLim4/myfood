import mysql from "mysql2/promise"
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
        const connection = await mysql.createConnection({
            host: 'junction.proxy.rlwy.net',
            user: 'root',
            password: 'VnTcdxYndhugegcsgziTgEymdLfCcWZo',
            database: 'railway',
            port: 54287
        });
        const [rows] = await connection.execute("SELECT * FROM favorite");
        await connection.end();
        return NextResponse.json(rows, {headers: { 'Access-Control-Allow-Origin': '*' }});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { store_id, store_indentification_key, store_name, store_image, user_authentication_key } = body;

        const connection = await mysql.createConnection({
            host: 'junction.proxy.rlwy.net',
            user: 'root',
            password: 'VnTcdxYndhugegcsgziTgEymdLfCcWZo',
            database: 'railway',
            port: 54287
        });
        
        const [rows] = await connection.execute(
            `INSERT INTO favorite (store_id, store_indentification_key, store_name, store_image, user_authentication_key) VALUES (?, ?, ?, ?, ?)`, [store_id, store_indentification_key, store_name, store_image, user_authentication_key]);

        await connection.end();

        return NextResponse.json({ message: "adicionado ao carrinho com sucesso", success: true, rows }, { status: 201 }, { message: 'Requisição bem-sucedida' }, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })

    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
        return NextResponse.json({ error: 'Erro ao processar a requisição' }, {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}


export async function DELETE(request) {
    try {
        const body = await request.json();
        const { store_id } = body;

        const connection = await mysql.createConnection({
            host: 'junction.proxy.rlwy.net',
            user: 'root',
            password: 'VnTcdxYndhugegcsgziTgEymdLfCcWZo',
            database: 'railway',
            port: 54287
        });

        const [rows] = await connection.execute(`DELETE FROM favorite WHERE store_id = ?`, [store_id]);

        await connection.end();
        return NextResponse.json({ message: "Item removido dos favoritos com sucesso", success: true, rows }, { status: 200 }, {headers: { 'Access-Control-Allow-Origin': '*' }});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}