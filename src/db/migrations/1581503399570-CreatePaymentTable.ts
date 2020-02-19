import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePaymentTable1581503399570 implements MigrationInterface {
    public name = "CreatePaymentTable1581503399570";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `payments` (`id` varchar(36) NOT NULL, `amount` varchar(255) NOT NULL, `referenceId` varchar(255) NOT NULL, `processor` varchar(255) NOT NULL, `method` varchar(255) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD `paymentId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD UNIQUE INDEX `IDX_b6e3240be778554ea319f31684` (`paymentId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_b6e3240be778554ea319f31684` ON `bookings` (`paymentId`)", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_b6e3240be778554ea319f316841` FOREIGN KEY (`paymentId`) REFERENCES `payments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_b6e3240be778554ea319f316841`", undefined);
        await queryRunner.query("DROP INDEX `REL_b6e3240be778554ea319f31684` ON `bookings`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP INDEX `IDX_b6e3240be778554ea319f31684`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP COLUMN `paymentId`", undefined);
        await queryRunner.query("DROP TABLE `payments`", undefined);
    }

}
