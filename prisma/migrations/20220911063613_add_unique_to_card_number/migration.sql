/*
  Warnings:

  - A unique constraint covering the columns `[cardNumber]` on the table `cards` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cards_cardNumber_key" ON "cards"("cardNumber");
