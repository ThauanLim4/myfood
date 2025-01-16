import mysql from "mysql2/promise";

export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}

export async function GET(request) {
    try {

        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute("SELECT * FROM food");
        
        await conection.end();
        return Response.json(rows);
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}