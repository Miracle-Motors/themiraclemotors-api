import { Terminals } from "./../Terminals";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, OneToMany } from "typeorm-plus";
import { Lga } from "../Lga/lgaModel";

@Entity({ orderBy: { createdAt: "DESC"}})
export class States extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column()
    public name: string;

    @OneToMany((type) => Lga, (lgas) => lgas.state)
    public lgas: Lga[];

    @OneToMany((type) => Terminals, (terminals) => terminals.state)
    public terminals: Terminals[];

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
