import { json, response } from "express";

export async function POST(request) {
    try {
        const { body } = await request.json();
        const {name, email, password } = body;

        if(!name && !email && !password) {
            return new Response(json.stringify({erro: "campos inválidos"}))
        }
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await conection.execute(`INSERT INTO user (id,name, email, password) VALUES (?, ?, ?)`, [name, email, password]);


        await conection.end();

        return {
            mensage: "usuário cadastrado com sucesso",
            status: 200,
            body: rows
        }

    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}