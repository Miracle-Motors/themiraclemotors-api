import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTypeToBookingsTable1581487308233 implements MigrationInterface {
    public name = "AddTypeToBookingsTable1581487308233";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `bookings` ADD `type` enum ('one_way', 'round_trip') NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `bookings` DROP COLUMN `type`", undefined);
    }

}
