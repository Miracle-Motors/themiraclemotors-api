import {MigrationInterface, QueryRunner} from "typeorm-plus";

export class CreateBookingsandPassengerTable1581369001919 implements MigrationInterface {
    public name = "CreateBookingsandPassengerTable1581369001919";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `passengers` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `gender` varchar(255) NOT NULL, `ageBracket` varchar(255) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `bookingId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `bookings` (`id` varchar(36) NOT NULL, `numberOfTravellers` int NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `userId` varchar(36) NULL, `tripId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `seats` ADD `bookingId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `seats` ADD CONSTRAINT `FK_618a18c5660a16458ad6ea87572` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `passengers` ADD CONSTRAINT `FK_b4974a1c9a2e1555e8d33c1dbee` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_38a69a58a323647f2e75eb994de` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_e33f0b046a54956d011b3d377ef` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_e33f0b046a54956d011b3d377ef`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_38a69a58a323647f2e75eb994de`", undefined);
        await queryRunner.query("ALTER TABLE `passengers` DROP FOREIGN KEY `FK_b4974a1c9a2e1555e8d33c1dbee`", undefined);
        await queryRunner.query("ALTER TABLE `seats` DROP FOREIGN KEY `FK_618a18c5660a16458ad6ea87572`", undefined);
        await queryRunner.query("ALTER TABLE `seats` DROP COLUMN `bookingId`", undefined);
        await queryRunner.query("DROP TABLE `bookings`", undefined);
        await queryRunner.query("DROP TABLE `passengers`", undefined);
    }

}
