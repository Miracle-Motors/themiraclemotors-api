import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProfileTable1582184006396 implements MigrationInterface {
    public name = "CreateProfileTable1582184006396";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `profile` (`id` varchar(36) NOT NULL, `address` varchar(255) NULL, `kinFullName` varchar(255) NULL, `kinPhoneNumber` varchar(255) NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD `profileId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_b1bda35cdb9a2c1b777f5541d8` (`profileId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_b1bda35cdb9a2c1b777f5541d8` ON `users` (`profileId`)", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_b1bda35cdb9a2c1b777f5541d87` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_b1bda35cdb9a2c1b777f5541d87`", undefined);
        await queryRunner.query("DROP INDEX `REL_b1bda35cdb9a2c1b777f5541d8` ON `users`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_b1bda35cdb9a2c1b777f5541d8`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `profileId`", undefined);
        await queryRunner.query("DROP TABLE `profile`", undefined);
    }

}
