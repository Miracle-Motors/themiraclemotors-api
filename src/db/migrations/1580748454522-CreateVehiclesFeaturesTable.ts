import { MigrationInterface, QueryRunner } from "typeorm-plus";

export class CreateVehiclesFeaturesTable1580748454522 implements MigrationInterface {
    public name = "CreateVehiclesFeaturesTable1580748454522";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `vehicles_features` (`id` varchar(36) NOT NULL, `attribute` varchar(255) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_248e4411e183376b56a163398a` (`attribute`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_248e4411e183376b56a163398a` ON `vehicles_features`", undefined);
        await queryRunner.query("DROP TABLE `vehicles_features`", undefined);
    }

}
