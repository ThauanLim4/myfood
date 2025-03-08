/*
  Warnings:

  - You are about to drop the column `openNow` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productType" TEXT DEFAULT 'comida';

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "openNow";
