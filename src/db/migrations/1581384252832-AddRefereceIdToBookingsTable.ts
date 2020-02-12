import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRefereceIdToBookingsTable1581384252832 implements MigrationInterface {
    public name = "AddRefereceIdToBookingsTable1581384252832";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `bookings` ADD `referenceId` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `bookings` DROP COLUMN `referenceId`", undefined);
    }

}
