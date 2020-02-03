import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersAndRolesTables1580680277834 implements MigrationInterface {
    public name = "CreateUsersAndRolesTables1580680277834";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `roles` (`id` varchar(36) NOT NULL, `role` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_ccc7c1489f3a6b3c9b47d4537c` (`role`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NULL, `phoneNumber` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `verified` tinyint NOT NULL DEFAULT 0, `refreshToken` varchar(255) NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), UNIQUE INDEX `IDX_1e3d0240b49c40521aaeb95329` (`phoneNumber`), UNIQUE INDEX `IDX_4fdf5f552fcfe06082a35e9728` (`refreshToken`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `users_roles_roles` (`usersId` varchar(36) NOT NULL, `rolesId` varchar(36) NOT NULL, INDEX `IDX_df951a64f09865171d2d7a502b` (`usersId`), INDEX `IDX_b2f0366aa9349789527e0c36d9` (`rolesId`), PRIMARY KEY (`usersId`, `rolesId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` ADD CONSTRAINT `FK_df951a64f09865171d2d7a502b1` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` ADD CONSTRAINT `FK_b2f0366aa9349789527e0c36d97` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users_roles_roles` DROP FOREIGN KEY `FK_b2f0366aa9349789527e0c36d97`", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` DROP FOREIGN KEY `FK_df951a64f09865171d2d7a502b1`", undefined);
        await queryRunner.query("DROP INDEX `IDX_b2f0366aa9349789527e0c36d9` ON `users_roles_roles`", undefined);
        await queryRunner.query("DROP INDEX `IDX_df951a64f09865171d2d7a502b` ON `users_roles_roles`", undefined);
        await queryRunner.query("DROP TABLE `users_roles_roles`", undefined);
        await queryRunner.query("DROP INDEX `IDX_4fdf5f552fcfe06082a35e9728` ON `users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_1e3d0240b49c40521aaeb95329` ON `users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`", undefined);
        await queryRunner.query("DROP TABLE `users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_ccc7c1489f3a6b3c9b47d4537c` ON `roles`", undefined);
        await queryRunner.query("DROP TABLE `roles`", undefined);
    }

}
