import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity } from "typeorm";

@Entity()
export class Terminals extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
