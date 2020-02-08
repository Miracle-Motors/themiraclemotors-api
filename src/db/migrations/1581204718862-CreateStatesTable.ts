import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateStatesTable1581204718862 implements MigrationInterface {
    public name = "CreateStatesTable1581204718862";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `states` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `states`", undefined);
    }

}
