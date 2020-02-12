import { Users } from "./../User/userModel";
import { Trips } from "./../Trips/tripsModel";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, OneToMany, ManyToOne, Generated } from "typeorm";
import { Seats } from "../Trips/seatsModel";
import { Passengers } from "./passengersModel";
import { BookingType } from "../../enums";

@Entity()
export class Bookings extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public referenceId: string;

    @Column()
    public numberOfTravellers: number;

    @Column({ type: "enum", enum: BookingType })
    public type: BookingType;

    @ManyToOne((type) => Users, (user) => user.bookings, { eager: true })
    public user: Users;

    @ManyToOne((type) => Trips, (trip) => trip.bookings, { eager: true })
    public trip: Trips;

    @OneToMany((type) => Seats, (seats) => seats.booking)
    public seats: Seats[];

    @OneToMany((type) => Passengers, (passenger) => passenger.booking)
    public passengers: Passengers[];

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
