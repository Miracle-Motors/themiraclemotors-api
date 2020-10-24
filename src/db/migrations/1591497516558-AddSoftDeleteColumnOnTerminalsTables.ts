import { MigrationInterface, QueryRunner } from "typeorm-plus";

export class AddSoftDeleteColumnOnTerminalsTables1591497516558 implements MigrationInterface {
    public name = "AddSoftDeleteColumnOnTerminalsTables1591497516558";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `terminals` ADD `deletedAt` datetime(6) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `terminals` DROP COLUMN `deletedAt`");
    }

}
