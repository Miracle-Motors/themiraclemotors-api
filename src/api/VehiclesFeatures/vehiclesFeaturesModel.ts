import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, ManyToMany } from "typeorm-plus";
import { Vehicles } from "../Vehicles/vehiclesModel";

@Entity()
export class VehiclesFeatures extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ unique: true })
    public attribute: string;

    @ManyToMany((type) => Vehicles)
    public vehicles: Vehicles;

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn({ select: false })
    public createdAt: Date;
}
