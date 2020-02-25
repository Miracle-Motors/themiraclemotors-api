import { Bookings } from "./../Bookings/bookingsModel";
import { Roles } from "./../Role/roleModel";
import {
    Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,
    UpdateDateColumn, BaseEntity, ManyToMany, JoinTable, OneToMany, OneToOne, JoinColumn,
} from "typeorm-plus";
import { Trips } from "../Trips/tripsModel";
import { Profile } from "../Profile/profileModel";

@Entity({ orderBy: { createdAt: "DESC"}})
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

    @Column()
    public gender: string;

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

    @OneToOne((type) => Profile, { eager: true })
    @JoinColumn()
    public profile: Profile;

    @CreateDateColumn()
    public createdAt: string;

    @UpdateDateColumn()
    public updatedAt: string;

}
