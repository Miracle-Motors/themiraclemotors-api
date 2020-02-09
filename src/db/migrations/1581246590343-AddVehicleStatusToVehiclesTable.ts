import {MigrationInterface, QueryRunner} from "typeorm";

export class AddVehicleStatusToVehiclesTable1581246590343 implements MigrationInterface {
    public name = "AddVehicleStatusToVehiclesTable1581246590343";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `vehicles` CHANGE `description` `status` text NULL", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` DROP COLUMN `status`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` ADD `status` enum ('available', 'booked', 'in_transit') NULL DEFAULT 'available'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `vehicles` DROP COLUMN `status`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` ADD `status` text NULL", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` CHANGE `status` `description` text NULL", undefined);
    }

}
