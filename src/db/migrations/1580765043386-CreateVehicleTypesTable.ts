import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateVehicleTypesTable1580765043386 implements MigrationInterface {
    public name = "CreateVehicleTypesTable1580765043386";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `vehicle_types` (`id` varchar(36) NOT NULL, `model` varchar(255) NOT NULL, `seatsNumber` int NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `vehicle_types`", undefined);
    }

}
