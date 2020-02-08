import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import { States } from "../States";

@Entity()
export class Lga extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column()
    public name: string;

    @ManyToOne((type) => States, (state) => state.lgas)
    public state: States;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
