import mysql from "mysql2/promise";

export async function GET(request) {
    try {
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute("SELECT * FROM store");
        
        await conection.end();
        return Response.json(rows);
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}


// export async function GET(request) {
//     const dbConfig = {
//         host: "localhost",
//         user: "root",
//         password: "1234",
//         database: "foods"
//     };

//     try {

//         const conection = await mysql.createConnection(dbConfig);
//         const [rows] = await conection.execute("SELECT * FROM stores");
        
//         await conection.end();
//         return Response.json(rows);
//     } catch (erro) {
//         console.log("erro conectar ao banco de dados", erro)
//     }
// }