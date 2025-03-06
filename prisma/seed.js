const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    try {
        const drinks = await prisma.category.create({
            data: {
                name: "Bebidas",
                image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741262246/pngegg_6_bjiblz.png",
                products: {
                    createMany: {
                        data: [
                            { name: "Refrigerante Coca-Cola", price: 10, image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741262678/pngegg_8_unt6kz.png", description: "refrigerante coca-cola 1 Litro", discontPorcent: 0 },
                            { name: "Refrigerante Fanta 1L", price: 8, image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741270698/pngegg_9_yygdhq.png", description: "refrigerante fanta de 1 Litro", discontPorcent: 0 },
                            { name: "Refrigerante Pepsi", price: 9, image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734442295/pepsi_drffbi.png", description: "refrigerante pepsi 1 Litro", discontPorcent: 0 },

                        ]
                    }
                }
            }
        })
        console.log({ drinks });
    } catch (error) {
        console.log("error seeding database", error);
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });