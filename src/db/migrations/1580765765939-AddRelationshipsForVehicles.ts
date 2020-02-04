import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationshipsForVehicles1580765765939 implements MigrationInterface {
    public name = "AddRelationshipsForVehicles1580765765939";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `vehicles_features_vehicles_features` (`vehiclesId` varchar(36) NOT NULL, `vehiclesFeaturesId` varchar(36) NOT NULL, INDEX `IDX_0d4a120d04ca674327bfa31ce8` (`vehiclesId`), INDEX `IDX_8c7e31fda4638861d3c143125e` (`vehiclesFeaturesId`), PRIMARY KEY (`vehiclesId`, `vehiclesFeaturesId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` ADD `typeId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` ADD CONSTRAINT `FK_44021c21f7a15b8d4cfee064d5c` FOREIGN KEY (`typeId`) REFERENCES `vehicle_types`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` ADD CONSTRAINT `FK_0d4a120d04ca674327bfa31ce89` FOREIGN KEY (`vehiclesId`) REFERENCES `vehicles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` ADD CONSTRAINT `FK_8c7e31fda4638861d3c143125e2` FOREIGN KEY (`vehiclesFeaturesId`) REFERENCES `vehicles_features`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` DROP FOREIGN KEY `FK_8c7e31fda4638861d3c143125e2`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` DROP FOREIGN KEY `FK_0d4a120d04ca674327bfa31ce89`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` DROP FOREIGN KEY `FK_44021c21f7a15b8d4cfee064d5c`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` DROP COLUMN `typeId`", undefined);
        await queryRunner.query("DROP INDEX `IDX_8c7e31fda4638861d3c143125e` ON `vehicles_features_vehicles_features`", undefined);
        await queryRunner.query("DROP INDEX `IDX_0d4a120d04ca674327bfa31ce8` ON `vehicles_features_vehicles_features`", undefined);
        await queryRunner.query("DROP TABLE `vehicles_features_vehicles_features`", undefined);
    }

}
