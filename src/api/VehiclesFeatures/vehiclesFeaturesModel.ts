import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, ManyToMany } from "typeorm-plus";
import { Vehicles } from "../Vehicles/vehiclesModel";

@Entity({ orderBy: { createdAt: "DESC"}})
export class VehiclesFeatures extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ unique: true })
    public attribute: string;

    @ManyToMany((type) => Vehicles)
    public vehicles: Vehicles;

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;
}
