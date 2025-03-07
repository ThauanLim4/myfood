-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "storeId" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "stars" DOUBLE PRECISION NOT NULL,
    "openAt" DOUBLE PRECISION NOT NULL,
    "closeAt" DOUBLE PRECISION NOT NULL,
    "openNow" BOOLEAN NOT NULL,
    "freight" DECIMAL(5,2) DEFAULT 0,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
