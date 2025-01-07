import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await connection.execute("SELECT * FROM user");
        await connection.end();
        return NextResponse.json(rows);
    } catch (error) {
        console.log("Error connecting to the database", error);
        return NextResponse.json({ error: "Error connecting to the database" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const {address} = body
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await conection.execute(`UPDATE user SET address = ? WHERE user_name = "Thauan"`, [address]);
        
        await conection.end();
        return Response.json({rows});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}

export async function PUT(request) {
    try {
        const body = await request.json();
        const {address} = body
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await conection.execute(`UPDATE user SET adress = (?) WHERE user_name = "Thauan"`, [address]);
        
        await conection.end();
        return Response.json({rows});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}

