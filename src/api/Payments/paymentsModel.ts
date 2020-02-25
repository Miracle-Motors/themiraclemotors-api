import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, OneToOne } from "typeorm-plus";
import { Bookings } from "../Bookings/bookingsModel";

@Entity({ orderBy: { createdAt: "DESC"}})
export class Payments extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public amount: string;

    @Column()
    public referenceId: string;

    @Column()
    public processor: string;

    @Column()
    public method: string;

    @OneToOne((type) => Bookings, (booking) => booking.payment)
    public booking: Bookings;

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
