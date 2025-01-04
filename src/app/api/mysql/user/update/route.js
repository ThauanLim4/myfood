export async function PUT(request) {
    console.log("request", request);
    try {
        const body = await request.json();
        const {address} = body;
        const values = ["user_name", "user_email", "user_password", "address"];
        const conection = await mysql.createConnection("mysql://root:VnTcdxYndhugegcsgziTgEymdLfCcWZo@junction.proxy.rlwy.net:54287/railway");

        const [rows] = await conection.execute(`UPDATE user SET address = ? WHERE user_name = ?`, [address, body.user_name]);
        
        await conection.end();
        return Response.json({rows});
    } catch (erro) {
        console.log("erro conectar ao banco de dados", erro)
    }
}
