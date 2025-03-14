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

        // const category = await prisma.category.createMany({
        //     skipDuplicates: true,
        //     data: [
        //         {
        //             name: "Lanches",
        //             image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741348224/pngegg_11_gtoepz.png"
        //         },
        //         {
        //             name: "Gelados",
        //             image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734528159/ym9cjl3mwo9s3l9b7y7o.png"
        //         },
        //         {
        //             name: "Pizzas",
        //             image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734442722/pizza_ffcehe.png"
        //         },
        //         {
        //             name: "Doces",
        //             image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734613877/cupcake_fgoj7x.png"
        //         },
        //         {
        //             name: "Pratos",
        //             image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1735392068/sxogk7nvxkpo9gcwav79.avif"
        //         }
        //     ]
        // })

        const stores = await prisma.store.update({
            where: { id: '0f3d2f95-24c8-4fa5-82db-7a2056a62408' },
            data: {
                Products: {
                    createMany: {
                        data: [
                            {
                                name: "Cookie de chocolate",
                                price: 3,
                                description: "unidade cookie de chocolate é um delicado doce feito com açúcar, açai, açucar e chocolate",
                                image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734613877/cookie_rkcqxk.png",
                                discontPorcent: 0,
                                productType: "doce",
                                categoryId: "0f3d2f95-24c8-4fa5-82db-7a2056a62408"

                            },
                            {
                                name: "bolo de chocolate granulado com detalhes",
                                price: 78.90,
                                description: "bolo de chocolate granulado com detalhes é um delicado doce feito com açúcar, açai, açucar, chocolate e granulado",
                                image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741347510/pngegg_10_ptflfq.png",
                                discontPorcent: 0,
                                productType: "doce",
                                categoryId: "0f3d2f95-24c8-4fa5-82db-7a2056a62408"
                            },
                            {
                                name: "bolo de chocolate granulado com detalhes",
                                price: 78.90,
                                description: "bolo de chocolate granulado com detalhes é um delicado doce feito com açúcar, açai, açucar, chocolate e granulado",
                                image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1741347510/pngegg_10_ptflfq.png",
                                discontPorcent: 0,
                                productType: "doce",
                                categoryId: "0f3d2f95-24c8-4fa5-82db-7a2056a62408"
                            },
                            
                        ]
                    }
                }
            }
            // data: [
            //     {
            //         name: "Kravick Lanches",
            //         image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790769/Black_White_Bold_Simple_Co-Working_Space_Logo_e8lzqt.png",
            //         openAt: 16,
            //         closeAt: 22,
            //         stars: 4.3,
            //         freight: 10,
            //         Products: [
            //             {
            //                 price
            //             }
            //         ]
            //     },
            //     // {
            //     //     name: "Açai Delicia",
            //     //     image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790151/8003936_oth4fj.jpg",
            //     //     openAt: 16,
            //     //     closeAt: 23,
            //     //     stars: 4.1,
            //     //     freight: 5,
            //     // },
            //     // {
            //     //     name: "Docearia Benadete",
            //     //     image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790150/04-logo-DoceTok-Artesanato.jpg_ss6odv.webp",
            //     //     openAt: 10,
            //     //     closeAt: 21,
            //     //     stars: 4.6,
            //     //     freight: 3,
            //     // },
            //     // {
            //     //     name: "Pizzaria Italiana",
            //     //     image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734790150/pizzaria-italiana_okmglg.jpg",
            //     //     openAt: 16,
            //     //     closeAt: 23,
            //     //     stars: 3.9,
            //     //     freight: 5,
            //     // },
            //     // {
            //     //     name: "Bebidaria Nacional",
            //     //     image: "https://res.cloudinary.com/dhl67mauv/image/upload/v1734696091/images_zl8rdq.png",
            //     //     openAt: 7,
            //     //     closeAt: 23,
            //     //     stars: 4.3,
            //     //     freight: 2,
            //     // },
            // ]
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