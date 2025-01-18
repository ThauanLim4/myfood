import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function GET(request) {
    try {
        const conection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        })

        const [rows] = await conection.execute("SELECT * FROM user");
        
        await conection.end();
        return NextResponse.json(rows);
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}