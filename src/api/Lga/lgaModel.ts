import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, ManyToOne, OneToMany } from "typeorm";
import { States } from "../States";
import { Terminals } from "../Terminals";

@Entity()
export class Lga extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column()
    public name: string;

    @ManyToOne((type) => States, (state) => state.lgas)
    public state: States;

    @OneToMany((type) => Terminals, (terminals) => terminals.lga)
    public terminals: Terminals[];

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
