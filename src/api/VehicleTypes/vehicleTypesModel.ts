import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Vehicles } from "../Vehicles";

@Entity()
export class VehicleTypes extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public model: string;

    @Column()
    public seatsNumber: number;

    @OneToMany((type) => Vehicles, (vehicles) => vehicles.type)
    public vehicles: Vehicles[];

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;
}
