import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const data = await prisma.store.findMany();
        if(!data){
            throw new Error("Nenhum produto foi encontrado");
        }
        return new Response(JSON.stringify(data), {status: 200});
    } catch (error){

    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const data = await prisma.store.create({
            data: body
        });

        return new Response(JSON.stringify(data), { status: 201 });
    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}