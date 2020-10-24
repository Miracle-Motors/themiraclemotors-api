import { MigrationInterface, QueryRunner } from "typeorm-plus";

export class MakeGenderNullableOnUsersTable1585124911597 implements MigrationInterface {
    public name = "MakeGenderNullableOnUsersTable1585124911597";

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `seats` DROP FOREIGN KEY `FK_4d031d469dc99ea4607503976fb`", undefined);
        await queryRunner.query("ALTER TABLE `seats` DROP FOREIGN KEY `FK_618a18c5660a16458ad6ea87572`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` DROP FOREIGN KEY `FK_44021c21f7a15b8d4cfee064d5c`", undefined);
        await queryRunner.query("ALTER TABLE `lga` DROP FOREIGN KEY `FK_3739312e62be0013a3a9ed73d95`", undefined);
        await queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_548d87d64091cad8b454f45d50e`", undefined);
        await queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_929f236cc347a75b8eda4c760ac`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_1035df2affac4f099fc6466ddd6`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_7231c06ef0f173b585205a19b98`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_d3cea80b69fc4ecfd2273068395`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_fc5a8911f85074a660a4304baa1`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_b1bda35cdb9a2c1b777f5541d87`", undefined);
        await queryRunner.query("ALTER TABLE `passengers` DROP FOREIGN KEY `FK_b4974a1c9a2e1555e8d33c1dbee`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_38a69a58a323647f2e75eb994de`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_b6e3240be778554ea319f316841`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_e33f0b046a54956d011b3d377ef`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` DROP FOREIGN KEY `FK_0d4a120d04ca674327bfa31ce89`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` DROP FOREIGN KEY `FK_8c7e31fda4638861d3c143125e2`", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` DROP FOREIGN KEY `FK_b2f0366aa9349789527e0c36d97`", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` DROP FOREIGN KEY `FK_df951a64f09865171d2d7a502b1`", undefined);
        await queryRunner.query("DROP INDEX `IDX_b1bda35cdb9a2c1b777f5541d8` ON `users`", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `gender` `gender` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `seats` ADD CONSTRAINT `FK_4d031d469dc99ea4607503976fb` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `seats` ADD CONSTRAINT `FK_618a18c5660a16458ad6ea87572` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` ADD CONSTRAINT `FK_44021c21f7a15b8d4cfee064d5c` FOREIGN KEY (`typeId`) REFERENCES `vehicle_types`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `lga` ADD CONSTRAINT `FK_3739312e62be0013a3a9ed73d95` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_548d87d64091cad8b454f45d50e` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_929f236cc347a75b8eda4c760ac` FOREIGN KEY (`lgaId`) REFERENCES `lga`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_1035df2affac4f099fc6466ddd6` FOREIGN KEY (`arrivalTerminalId`) REFERENCES `terminals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_7231c06ef0f173b585205a19b98` FOREIGN KEY (`departureTerminalId`) REFERENCES `terminals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_fc5a8911f85074a660a4304baa1` FOREIGN KEY (`driverId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_d3cea80b69fc4ecfd2273068395` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_b1bda35cdb9a2c1b777f5541d87` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `passengers` ADD CONSTRAINT `FK_b4974a1c9a2e1555e8d33c1dbee` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_38a69a58a323647f2e75eb994de` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_e33f0b046a54956d011b3d377ef` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_b6e3240be778554ea319f316841` FOREIGN KEY (`paymentId`) REFERENCES `payments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` ADD CONSTRAINT `FK_0d4a120d04ca674327bfa31ce89` FOREIGN KEY (`vehiclesId`) REFERENCES `vehicles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` ADD CONSTRAINT `FK_8c7e31fda4638861d3c143125e2` FOREIGN KEY (`vehiclesFeaturesId`) REFERENCES `vehicles_features`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` ADD CONSTRAINT `FK_df951a64f09865171d2d7a502b1` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` ADD CONSTRAINT `FK_b2f0366aa9349789527e0c36d97` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users_roles_roles` DROP FOREIGN KEY `FK_b2f0366aa9349789527e0c36d97`", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` DROP FOREIGN KEY `FK_df951a64f09865171d2d7a502b1`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` DROP FOREIGN KEY `FK_8c7e31fda4638861d3c143125e2`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` DROP FOREIGN KEY `FK_0d4a120d04ca674327bfa31ce89`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_b6e3240be778554ea319f316841`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_e33f0b046a54956d011b3d377ef`", undefined);
        await queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_38a69a58a323647f2e75eb994de`", undefined);
        await queryRunner.query("ALTER TABLE `passengers` DROP FOREIGN KEY `FK_b4974a1c9a2e1555e8d33c1dbee`", undefined);
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_b1bda35cdb9a2c1b777f5541d87`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_d3cea80b69fc4ecfd2273068395`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_fc5a8911f85074a660a4304baa1`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_7231c06ef0f173b585205a19b98`", undefined);
        await queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_1035df2affac4f099fc6466ddd6`", undefined);
        await queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_929f236cc347a75b8eda4c760ac`", undefined);
        await queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_548d87d64091cad8b454f45d50e`", undefined);
        await queryRunner.query("ALTER TABLE `lga` DROP FOREIGN KEY `FK_3739312e62be0013a3a9ed73d95`", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` DROP FOREIGN KEY `FK_44021c21f7a15b8d4cfee064d5c`", undefined);
        await queryRunner.query("ALTER TABLE `seats` DROP FOREIGN KEY `FK_618a18c5660a16458ad6ea87572`", undefined);
        await queryRunner.query("ALTER TABLE `seats` DROP FOREIGN KEY `FK_4d031d469dc99ea4607503976fb`", undefined);
        await queryRunner.query("ALTER TABLE `users` CHANGE `gender` `gender` varchar(255) NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_b1bda35cdb9a2c1b777f5541d8` ON `users` (`profileId`)", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` ADD CONSTRAINT `FK_df951a64f09865171d2d7a502b1` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `users_roles_roles` ADD CONSTRAINT `FK_b2f0366aa9349789527e0c36d97` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` ADD CONSTRAINT `FK_8c7e31fda4638861d3c143125e2` FOREIGN KEY (`vehiclesFeaturesId`) REFERENCES `vehicles_features`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `vehicles_features_vehicles_features` ADD CONSTRAINT `FK_0d4a120d04ca674327bfa31ce89` FOREIGN KEY (`vehiclesId`) REFERENCES `vehicles`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_e33f0b046a54956d011b3d377ef` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_b6e3240be778554ea319f316841` FOREIGN KEY (`paymentId`) REFERENCES `payments`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_38a69a58a323647f2e75eb994de` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `passengers` ADD CONSTRAINT `FK_b4974a1c9a2e1555e8d33c1dbee` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_b1bda35cdb9a2c1b777f5541d87` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_fc5a8911f85074a660a4304baa1` FOREIGN KEY (`driverId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_d3cea80b69fc4ecfd2273068395` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_7231c06ef0f173b585205a19b98` FOREIGN KEY (`departureTerminalId`) REFERENCES `terminals`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_1035df2affac4f099fc6466ddd6` FOREIGN KEY (`arrivalTerminalId`) REFERENCES `terminals`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_929f236cc347a75b8eda4c760ac` FOREIGN KEY (`lgaId`) REFERENCES `lga`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_548d87d64091cad8b454f45d50e` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `lga` ADD CONSTRAINT `FK_3739312e62be0013a3a9ed73d95` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `vehicles` ADD CONSTRAINT `FK_44021c21f7a15b8d4cfee064d5c` FOREIGN KEY (`typeId`) REFERENCES `vehicle_types`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `seats` ADD CONSTRAINT `FK_618a18c5660a16458ad6ea87572` FOREIGN KEY (`bookingId`) REFERENCES `bookings`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
        await queryRunner.query("ALTER TABLE `seats` ADD CONSTRAINT `FK_4d031d469dc99ea4607503976fb` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT", undefined);
    }

}
