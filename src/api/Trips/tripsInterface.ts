import { TripStatus } from "../../enums";

export interface AddTripData {
    arrivalTerminalId: string;
    departureTerminalId: string;
    departureTimestamp: string;
    driverId?: string;
    vehicleId?: string;
    status?: TripStatus;
    price: string;
}

export interface SearchTripData {
    arrivalTerminalId: string;
    departureTerminalId: string;
    departureTimestamp: string;
}
