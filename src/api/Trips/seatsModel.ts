import { Bookings } from "./../Bookings/bookingsModel";
import { Trips } from "./tripsModel";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, ManyToOne, JoinColumn } from "typeorm-plus";
import { SeatStatus } from "../../enums";

@Entity({ orderBy: { createdAt: "DESC"}})
export class Seats extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public seatNumber: number;

    @Column({ type: "enum", enum: SeatStatus, default: SeatStatus.AVAILABLE })
    public status: SeatStatus;

    @ManyToOne((type) => Trips, (trip) => trip.seats)
    public trip: Trips;

    @ManyToOne((type) => Bookings, (booking) => booking.seats)
    public booking: Bookings;

    @UpdateDateColumn({ select: false })
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
