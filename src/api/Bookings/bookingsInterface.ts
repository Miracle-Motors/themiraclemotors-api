import { Passengers } from "./passengersModel";
import { BookingType, PaymentType } from "../../enums";

export interface BookTripData {
    paymentRef?: string;
    paymentType: PaymentType;
    type: BookingType;
    numberOfTravellers: number;
    passengers: Passengers[];
    bookings: Array<{
        tripId: string;
        seats: string[];
    }>;
}
