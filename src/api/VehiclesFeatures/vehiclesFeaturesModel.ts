import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, ManyToMany } from "typeorm";
import { Vehicles } from "../Vehicles";

@Entity()
export class VehiclesFeatures extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ unique: true })
    public attribute: string;

    @ManyToMany((type) => Vehicles)
    public vehicles: Vehicles;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;
}
