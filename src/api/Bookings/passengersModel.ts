import { Bookings } from "./bookingsModel";
import { Trips } from "./../Trips/tripsModel";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, OneToMany, ManyToOne } from "typeorm-plus";
import { Seats } from "../Trips/seatsModel";

@Entity({ orderBy: { createdAt: "DESC"}})
export class Passengers extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public name: string;

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
