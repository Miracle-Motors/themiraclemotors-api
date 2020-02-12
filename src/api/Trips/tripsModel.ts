import { Bookings } from "./../Bookings/bookingsModel";
import { Seats } from "./seatsModel";
import { Users } from "./../User/userModel";
import { Vehicles } from "./../Vehicles/vehiclesModel";
import { Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, BaseEntity, Column, OneToOne, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Terminals } from "../Terminals";
import { TripStatus } from "../../enums";

@Entity()
export class Trips extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ type: "datetime" })
    public departureTimestamp: string;

    @Column({ type: "enum", enum: TripStatus, default: TripStatus.AVAILABLE })
    public status: TripStatus;

    @ManyToOne((type) => Terminals, (terminal) => terminal.trips, { eager: true })
    @JoinColumn({ name: "arrivalTerminalId" })
    public arrivalTerminal: Terminals;

    @ManyToOne((type) => Terminals, (terminal) => terminal.trips, { eager: true })
    @JoinColumn({ name: "departureTerminalId" })
    public departureTerminal: Terminals;

    @ManyToOne((type) => Users, (user) => user.trips)
    public driver: Users;

    @ManyToOne((type) => Vehicles, (vehicle) => vehicle.trips, { eager: true })
    public vehicle: Vehicles;

    @OneToMany((type) => Seats, (seats) => seats.trip, { eager: true })
    public seats: Seats[];

    @OneToMany((type) => Bookings, (bookings) => bookings.trip)
    public bookings: Bookings[];

    @UpdateDateColumn()
    public updatedAt: Date;

    @CreateDateColumn()
    public createdAt: Date;

}
