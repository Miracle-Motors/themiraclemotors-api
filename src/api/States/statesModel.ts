import { Terminals } from "./../Terminals";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, OneToMany } from "typeorm";
import { Lga } from "../Lga/lgaModel";

@Entity()
export class States extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column()
    public name: string;

    @OneToMany((type) => Lga, (lgas) => lgas.state)
    public lgas: Lga[];

    @OneToMany((type) => Terminals, (terminals) => terminals.state)
    public terminals: Terminals[];

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
