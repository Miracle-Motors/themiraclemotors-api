import uuidv4 from "uuid/v4";
import { MigrationInterface, QueryRunner } from "typeorm-plus";

export class CreateSettingsTable1586025658053 implements MigrationInterface {
    public name = "CreateSettingsTable1586025658053";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `settings` (`id` varchar(36) NOT NULL, `serviceCharge` int NOT NULL DEFAULT 0, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("INSERT INTO `settings` (id,serviceCharge) VALUES (?,?);", [
            uuidv4(), 0]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `settings`", undefined);
    }

}
