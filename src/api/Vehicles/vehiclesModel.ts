import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm-plus";
import { VehicleTypes } from "./../VehicleTypes/vehicleTypesModel";
import { VehiclesFeatures } from "../VehiclesFeatures/vehiclesFeaturesModel";
import { Trips } from "../Trips/tripsModel";
import { VehicleStatus } from "../../enums";

@Entity({ orderBy: { createdAt: "DESC"}})
export class Vehicles extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ unique: true })
    public plateNumber: string;

    @Column({ type: "enum", enum: VehicleStatus, nullable: true, default: VehicleStatus.AVAILABLE })
    public status: VehicleStatus;

    @ManyToMany((type) => VehiclesFeatures, { eager: true })
    @JoinTable()
    public features: VehiclesFeatures[];

    @ManyToOne((type) => VehicleTypes, (vehicleTypes) => vehicleTypes.vehicles, { eager: true })
    public type: VehicleTypes;

    @OneToMany((type) => Trips, (trips) => trips.vehicle)
    public trips: Trips[];

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;
}
