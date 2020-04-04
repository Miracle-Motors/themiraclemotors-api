import { MigrationInterface, QueryRunner } from "typeorm-plus";

export class AddStatusFieldOnPaymentsTable1586013455754 implements MigrationInterface {
    public name = "AddStatusFieldOnPaymentsTable1586013455754";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `payments` ADD `status` varchar(255) NOT NULL DEFAULT 'pending'", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `gender` `gender` varchar(255) NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `gender` `gender` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `payments` DROP COLUMN `status`", undefined);
       }

}
