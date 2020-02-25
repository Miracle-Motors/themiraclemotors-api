import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, OneToMany } from "typeorm-plus";
import { Vehicles } from "../Vehicles/vehiclesModel";

@Entity({ orderBy: { createdAt: "DESC"}})
export class VehicleTypes extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public model: string;

    @Column()
    public seatsNumber: number;

    @OneToMany((type) => Vehicles, (vehicles) => vehicles.type)
    public vehicles: Vehicles[];

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn({ select: false })
    public createdAt: Date;
}
