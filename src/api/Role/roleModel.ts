import { Users } from "./../User/userModel";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToMany } from "typeorm-plus";

@Entity({ orderBy: { createdAt: "DESC"}})
export class Roles extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ unique: true })
    public role: string;

    @ManyToMany((type) => Roles)
    public users: Users[];

    @CreateDateColumn({ select: false })
    public createdAt: string;

    @UpdateDateColumn({ select: false })
    public updatedAt: string;
}
