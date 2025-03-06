/*
  Warnings:

  - You are about to drop the column `establishment` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_id_fkey";

-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_id_fkey";

-- DropIndex
DROP INDEX "Product_establishment_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "establishment",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "storeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Store";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
