const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    try {
        const categories = await prisma.category.createMany({
            data: [
                { name: "Bebidas", image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696091/images_zl8rdq.png" },
                { name: "Kravick Lanches", image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790769/Black_White_Bold_Simple_Co-Working_Space_Logo_e8lzqt.png" },
                { name: "Docearia Bernadete", image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790150/04-logo-DoceTok-Artesanato.jpg_ss6odv.webp" },
                { name: "Pizzaria Italiana", image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790150/pizzaria-italiana_okmglg.jpg" },
                { name: "Açai Delicia", image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790151/8003936_oth4fj.jpg" },
            ]
        });


        const stores = await prisma.store.createMany({
            data: [
                {
                    name: "Bebidaria Nacional",
                    image: "https://asset.cloudinary.com/dhl67mauv/efeade114c360b49f1f901a4fa484046",
                    stars: 4.2,
                    openAt: 12,
                    closeAt: 22,
                    openNow: null,
                    freight: 3.50,
                    
                }
            ]
        })
        console.log({ stores, products, categories });
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
    })