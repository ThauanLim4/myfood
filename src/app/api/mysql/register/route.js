export async function POST(request) {
    try {
        const { body } = request;
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");
        const [rows] = await conection.execute(`INSERT INTO user (name, email, password) VALUES ()`);
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro);
    }
}