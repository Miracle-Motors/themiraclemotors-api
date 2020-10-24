import {MigrationInterface, QueryRunner} from "typeorm-plus";

export class CreateTripsAndSeatsTable1581251999676 implements MigrationInterface {
    public name = "CreateTripsAndSeatsTable1581251999676";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `seats` (`id` varchar(36) NOT NULL, `seatNumber` int NOT NULL, `status` enum ('available', 'booked') NOT NULL DEFAULT 'available', `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `tripId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `trips` (`id` varchar(36) NOT NULL, `departureTimestamp` datetime NOT NULL, `status` enum ('available', 'booked', 'in_transit', 'arrived') NOT NULL DEFAULT 'available', `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `arrivalTerminalId` varchar(36) NULL, `departureTerminalId` varchar(36) NULL, `driverId` varchar(36) NULL, `vehicleId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `seats` ADD CONSTRAINT `FK_4d031d469dc99ea4607503976fb` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_1035df2affac4f099fc6466ddd6` FOREIGN KEY (`arrivalTerminalId`) REFERENCES `terminals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_7231c06ef0f173b585205a19b98` FOREIGN KEY (`departureTerminalId`) REFERENCES `terminals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_fc5a8911f85074a660a4304baa1` FOREIGN KEY (`driverId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_d3cea80b69fc4ecfd2273068395` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_d3cea80b69fc4ecfd2273068395`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_fc5a8911f85074a660a4304baa1`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_7231c06ef0f173b585205a19b98`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_1035df2affac4f099fc6466ddd6`", undefined);
        await queryRunner.query("ALTER TABLE `seats` DROP FOREIGN KEY `FK_4d031d469dc99ea4607503976fb`", undefined);
        await queryRunner.query("DROP TABLE `trips`", undefined);
        await queryRunner.query("DROP TABLE `seats`", undefined);
    }

}
