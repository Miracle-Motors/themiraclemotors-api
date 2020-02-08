import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLgaTable1581205051470 implements MigrationInterface {
    name = 'CreateLgaTable1581205051470'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `lga` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `lga`", undefined);
    }

}
