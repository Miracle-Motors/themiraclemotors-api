import {MigrationInterface, QueryRunner} from "typeorm-plus";

export class AddGenderToUserTable1582182369654 implements MigrationInterface {
    public name = "AddGenderToUserTable1582182369654";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_b6e3240be778554ea319f31684` ON `bookings`", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD `gender` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `gender`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_b6e3240be778554ea319f31684` ON `bookings` (`paymentId`)", undefined);
    }

}
