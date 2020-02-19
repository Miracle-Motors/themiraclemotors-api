import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPriceFieldToTripsTable1581496771461 implements MigrationInterface {
    public name = "AddPriceFieldToTripsTable1581496771461";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `trips` ADD `price` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `trips` DROP COLUMN `price`", undefined);
    }

}
