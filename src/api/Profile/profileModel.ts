import { Users } from "./../User/userModel";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, OneToOne, Column } from "typeorm-plus";

@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @OneToOne((type) => Users, (user) => user.profile)
    public user: Users;

    @Column({ nullable: true })
    public address: string;

    @Column({ nullable: true })
    public kinFullName: string;

    @Column({ nullable: true })
    public kinPhoneNumber: string;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
