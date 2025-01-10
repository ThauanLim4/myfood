import mysql from "mysql2/promise";

export async function POST(request) {
    try {
        const body = await request.json();
        const {address, user_name} = body
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await conection.execute(`UPDATE user SET address = ? WHERE user_name = ?`, [address, user_name]);
        
        await conection.end();
        return Response.json({rows});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}