import { Entity, PrimaryGeneratedColumn,  UpdateDateColumn, CreateDateColumn, BaseEntity } from "typeorm-plus";

@Entity({ orderBy: { createdAt: "DESC"}})
export class Settings extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

     @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
