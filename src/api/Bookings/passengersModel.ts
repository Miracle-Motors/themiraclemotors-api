import { Bookings } from "./bookingsModel";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, ManyToOne } from "typeorm-plus";

@Entity({ orderBy: { createdAt: "DESC" } })
export class Passengers extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public name: string;

    @Column()
    public phoneNumber: string;

    @Column({ nullable: true })
    public email: string;

    @Column({ nullable: true, type: "text" })
    public address: string;

    @Column()
    public gender: string;

    @Column()
    public ageBracket: string;

    @ManyToOne((type) => Bookings, (booking) => booking.passengers)
    public booking: Bookings;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
