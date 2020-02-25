import { Trips } from "./../Trips/tripsModel";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, ManyToOne, OneToMany } from "typeorm-plus";
import { States } from "../States/statesModel";
import { Lga } from "../Lga/lgaModel";

@Entity({ orderBy: { createdAt: "DESC"}})
export class Terminals extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public name: string;

    @ManyToOne((type) => States, (states) => states.terminals, { eager: true })
    public state: States;

    @ManyToOne((type) => Lga, (lga) => lga.terminals, { eager: true })
    public lga: Lga;

    @OneToMany((type) => Trips, (trips) => trips.arrivalTerminal)
    public trips: Trips[];

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
