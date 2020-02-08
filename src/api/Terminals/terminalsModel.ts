import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import { States } from "../States/statesModel";
import { Lga } from "../Lga/lgaModel";

@Entity()
export class Terminals extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public name: string;

    @ManyToOne((type) => States, (states) => states.terminals)
    public state: States;

    @ManyToOne((type) => Lga, (lga) => lga.terminals)
    public lga: Lga;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
