-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,
    "image" TEXT NOT NULL,
    "discontPorcent" INTEGER NOT NULL,
    "establishment" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "stars" DOUBLE PRECISION NOT NULL,
    "openAt" DOUBLE PRECISION NOT NULL,
    "closeAt" DOUBLE PRECISION NOT NULL,
    "openNow" BOOLEAN NOT NULL,
    "freight" DECIMAL(5,2),

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_establishment_key" ON "Product"("establishment");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_fkey" FOREIGN KEY ("id") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_id_fkey" FOREIGN KEY ("id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
