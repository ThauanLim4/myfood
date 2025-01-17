import { NextResponse } from 'next/server';

export function middleware(req) {
    const origin = req.headers.get('origin');
    const allowedOrigins = ['http://localhost:3000'];

    if (allowedOrigins.includes(origin)) {
        const res = NextResponse.next();
        res.headers.set('Access-Control-Allow-Origin', origin);
        res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // Trata requisições preflight (OPTIONS)
        if (req.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': origin,
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            });
        }

        return res;
    }

    // Bloqueia a requisição se a origem não for permitida
    return new Response('Origin not allowed', { status: 403 });
}

export const config = {
    matcher: '/app/api/mysql/:path*'
}