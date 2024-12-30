import mysql from "mysql2/promise";

export async function GET(request) {
    try {

        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute("SELECT * FROM cart");
        
        await conection.end();
        return Response.json(rows);
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}

export async function POST(request) {
    try {
        const { body } = request;
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute(`INSERT INTO cart (product_name, product_id, store_id, quantity, unit_price, total_price, add_at) VALUES ()`);
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}