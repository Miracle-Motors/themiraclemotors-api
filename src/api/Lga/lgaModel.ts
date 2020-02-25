import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, ManyToOne, OneToMany } from "typeorm-plus";
import { States } from "../States/statesModel";
import { Terminals } from "../Terminals/terminalsModel";

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

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn({ select: false })
    public createdAt: Date;

}
