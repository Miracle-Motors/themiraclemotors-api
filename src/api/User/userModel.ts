import { Bookings } from "./../Bookings/bookingsModel";
import { Roles } from "./../Role/roleModel";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Trips } from "../Trips/tripsModel";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column({ nullable: true, unique: true })
    public email: string;

    @Column({ unique: true })
    public phoneNumber: string;

    @Column({ select: false })
    public password: string;

    @Column({ default: false })
    public verified: boolean;

    @Column({ nullable: true, unique: true })
    public refreshToken: string;

    @ManyToMany((type) => Roles, { eager: true })
    @JoinTable()
    public roles: Roles[];

    @OneToMany((type) => Trips, (trips) => trips.driver)
    public trips: Trips[];

    @OneToMany((type) => Bookings, (booking) => booking.user)
    public bookings: Bookings[];

    @CreateDateColumn()
    public createdAt: string;

    @UpdateDateColumn()
    public updatedAt: string;

}
