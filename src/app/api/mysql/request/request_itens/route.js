import mysql from "mysql2/promise";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const connection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await connection.execute("SELECT * FROM request_items");

        await connection.end();
        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error connecting to the database", error);
        return NextResponse.json({ error: "Error connecting to the database" }, { status: 500 });
    }
}