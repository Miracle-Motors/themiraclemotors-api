import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationshipToStatesAndLgaTables1581205338934 implements MigrationInterface {
    public name = "AddRelationshipToStatesAndLgaTables1581205338934";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `lga` ADD `stateId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `lga` ADD CONSTRAINT `FK_3739312e62be0013a3a9ed73d95` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `lga` DROP FOREIGN KEY `FK_3739312e62be0013a3a9ed73d95`", undefined);
        await queryRunner.query("ALTER TABLE `lga` DROP COLUMN `stateId`", undefined);
    }

}
