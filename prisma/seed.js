const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    try {
        // const drinks = await prisma.category.update({
        //     where: { id: "bb175265-9d26-4455-b372-e081a120269e" },
        //     data: {
        //         name: "Bebidas",
        //         image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741262246/pngegg_6_bjiblz.png",
        //         products: {
        //             upsert: {
        //                 where: {},
        //                 create: {},
        //                 update: {},
        //             }
        //         }
        //     }
        // });

        const category = await prisma.category.createMany({
            skipDuplicates: true,
            data: [
                {
                    name: "Bebidas",
                    image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741262246/pngegg_6_bjiblz.png",
                },
            ]
        })

        const stores = await prisma.store.createMany({
            skipDuplicates: true,
            data: [
                {
                    name: "McDonald's",
                    image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1735396181/ivwnjsvaehreihai5tfo.jpg",
                    closeAt: 22,
                    openAt: 8,
                    openNow: true,
                    stars: 4.8,
                    freight: 12,
                },
            ]
        })

        // const fastFood = await prisma.category.update({
        //     where: { id: "c1b531c5-7836-4f0b-bde4-2225b0beeb4a" },
        //     data: {
        //         name: "Lanches",
        //         image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741262446/pngegg_6_bjiblz.png",
        //         products: {
        //             upsert: {
        //                 where: {},
        //                 create: {},
        //                 update: {},
        //             }
        //         }
        //     }
        // })

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