-- DropForeignKey
ALTER TABLE `Round` DROP FOREIGN KEY `Round_newsId_fkey`;

-- DropForeignKey
ALTER TABLE `Round` DROP FOREIGN KEY `Round_satireId_fkey`;

-- AlterTable
ALTER TABLE `Round` MODIFY `newsId` VARCHAR(191) NULL,
    MODIFY `satireId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Round` ADD CONSTRAINT `Round_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`uuid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Round` ADD CONSTRAINT `Round_satireId_fkey` FOREIGN KEY (`satireId`) REFERENCES `Satire`(`uuid`) ON DELETE SET NULL ON UPDATE CASCADE;
