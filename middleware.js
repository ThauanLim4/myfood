export function middleware(req) {
    const res = new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });

    if (req.method === 'OPTIONS') {
        return res; // Retorna resposta preflight
    }
    return NextResponse.next(); // Passa para o próximo middleware ou handler
}
