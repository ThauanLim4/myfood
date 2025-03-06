import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const data = await prisma.category.findMany();
        if(!data){
            throw new Error("Nenhuma categoria foi encontrada");
        }
        return new Response(JSON.stringify(data), {status: 200});
    } catch (error){

    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const newCategory = await prisma.category.create({
            data: body
        });

        return new Response(JSON.stringify(newCategory), { status: 201 });
    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}