import mysql from "mysql2/promise";

export async function GET(request) {
    try {
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await conection.execute("SELECT * FROM user");
        await conection.end();
        return Response.json({rows});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
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

