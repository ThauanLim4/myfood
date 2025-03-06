const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    try {
        const categories = await prisma.category.createMany({
            data: [
                { name: "Bebidas", image: "https://asset.cloudinary.com/dhl67mauv/b1335c072366973005407435bbd71d0d" },
                { name: "Kravick Lanches", image: "https://asset.cloudinary.com/dhl67mauv/9b2e73b55c08ecb77875d869b821e86c" },
                { name: "Docearia Bernadete", image: "https://asset.cloudinary.com/dhl67mauv/62b8097c3f36fde48fae12fbbc818079" },
                { name: "Pizzaria Italiana", image: "https://asset.cloudinary.com/dhl67mauv/959c0d935c1bd4a0a55174e7d404c174" },
                { name: "Açai Delicia", image: "https://asset.cloudinary.com/dhl67mauv/959c0d935c1bd4a0a55174e7d404c174" },
            ]
        });

        const products = await prisma.product.createMany({
            data: [
                {
                    name: "Coca-Cola 1L",
                    description: "Coca-cola da garrafa de vidro de um litro, considerada a mais saborosa entre todas as bebidas",
                    price: 10,
                    image: "https://asset.cloudinary.com/dhl67mauv/d23101e41a0a8d8b8955ab91c9645be2",
                    discontPorcent: 0,
                    establishment: "Bebidaria Nacional"
                },
                {
                    name: "Coca-cola 2L",
                    description: "Coca-cola 2 litros, serve para até 4 pessoas",
                    price: 10,
                    image: "https://asset.cloudinary.com/dhl67mauv/d23101e41a0a8d8b8955ab91c9645be2",
                    discontPorcent: 0,
                    establishment: "Bebidaria Nacional"
                }
            ]
        })

        const stores = await prisma.store.createMany({
            data: [
                {
                    name: "Bebidaria Nacional",
                    image: "https://asset.cloudinary.com/dhl67mauv/efeade114c360b49f1f901a4fa484046",
                    stars: 4.2,
                    openAt: 12,
                    closeAt: 22,
                    openNow: null,
                    freight: 3.50
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