/*
  Warnings:

  - You are about to drop the `_NewsToRound` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoundToSatire` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `newsId` to the `Round` table without a default value. This is not possible if the table is not empty.
  - Added the required column `satireId` to the `Round` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_NewsToRound` DROP FOREIGN KEY `_NewsToRound_A_fkey`;

-- DropForeignKey
ALTER TABLE `_NewsToRound` DROP FOREIGN KEY `_NewsToRound_B_fkey`;

-- DropForeignKey
ALTER TABLE `_RoundToSatire` DROP FOREIGN KEY `_RoundToSatire_A_fkey`;

-- DropForeignKey
ALTER TABLE `_RoundToSatire` DROP FOREIGN KEY `_RoundToSatire_B_fkey`;

-- AlterTable
ALTER TABLE `Round` ADD COLUMN `newsId` VARCHAR(191) NOT NULL,
    ADD COLUMN `satireId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_NewsToRound`;

-- DropTable
DROP TABLE `_RoundToSatire`;

-- AddForeignKey
ALTER TABLE `Round` ADD CONSTRAINT `Round_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Round` ADD CONSTRAINT `Round_satireId_fkey` FOREIGN KEY (`satireId`) REFERENCES `Satire`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
