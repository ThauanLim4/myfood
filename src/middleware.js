import { cors } from "./app/api/libs/cors";

export function middleware(req) {
    return cors(req);
}

export const config = {
    matcher: '/api/mysql/:path*'
}