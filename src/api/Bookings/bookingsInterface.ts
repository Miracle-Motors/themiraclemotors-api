import { Passengers } from "./passengersModel";
import { BookingType } from "../../enums";

export interface BookTripData {
    type: BookingType;
    numberOfTravellers: number;
    passengers: Passengers[];
    bookings: Array<{
        tripId: string;
        seats: string[];
    }>;
}
