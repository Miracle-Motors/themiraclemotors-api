import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateVehiclesTable1580747976998 implements MigrationInterface {
    public name = "CreateVehiclesTable1580747976998";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `vehicles` (`id` varchar(36) NOT NULL, `plateNumber` varchar(255) NOT NULL, `description` text NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_66ea96381a7a7ceb35c72f3662` (`plateNumber`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_66ea96381a7a7ceb35c72f3662` ON `vehicles`", undefined);
        await queryRunner.query("DROP TABLE `vehicles`", undefined);
    }

}
