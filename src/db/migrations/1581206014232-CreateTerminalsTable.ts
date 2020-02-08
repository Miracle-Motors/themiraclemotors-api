import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTerminalsTable1581206014232 implements MigrationInterface {
    public name = "CreateTerminalsTable1581206014232";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `terminals` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `stateId` int NULL, `lgaId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_548d87d64091cad8b454f45d50e` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_929f236cc347a75b8eda4c760ac` FOREIGN KEY (`lgaId`) REFERENCES `lga`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_929f236cc347a75b8eda4c760ac`", undefined);
        await queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_548d87d64091cad8b454f45d50e`", undefined);
        await queryRunner.query("DROP TABLE `terminals`", undefined);
    }

}
