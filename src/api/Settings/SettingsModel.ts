import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column } from "typeorm-plus";

@Entity({ orderBy: { createdAt: "DESC" } })
export class Settings extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ default: 0 })
    public serviceCharge: number;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
