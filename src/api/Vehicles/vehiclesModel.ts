import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { VehicleTypes } from "./../VehicleTypes/vehicleTypesModel";
import { VehiclesFeatures } from "../VehiclesFeatures/vehiclesFeaturesModel";

@Entity()
export class Vehicles extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ unique: true })
    public plateNumber: string;

    @Column({ nullable: true, type: "text" })
    public description: string;

    @ManyToMany((type) => VehiclesFeatures, { eager: true })
    @JoinTable()
    public features: VehiclesFeatures[];

    @ManyToOne((type) => VehicleTypes, (vehicleTypes) => vehicleTypes.vehicles, { eager: true })
    public type: VehicleTypes;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;
}
