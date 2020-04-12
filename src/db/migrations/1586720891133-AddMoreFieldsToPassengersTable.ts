import {MigrationInterface, QueryRunner} from "typeorm-plus";

export class AddMoreFieldsToPassengersTable1586720891133 implements MigrationInterface {
    public name = "AddMoreFieldsToPassengersTable1586720891133";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `passengers` ADD `phoneNumber` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `passengers` ADD `email` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `passengers` ADD `address` text NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `passengers` DROP COLUMN `address`", undefined);
        await queryRunner.query("ALTER TABLE `passengers` DROP COLUMN `email`", undefined);
        await queryRunner.query("ALTER TABLE `passengers` DROP COLUMN `phoneNumber`", undefined);
    }

}
