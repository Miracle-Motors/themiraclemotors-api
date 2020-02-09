import { Seats } from "./seatsModel";
import { Vehicles } from "./../Vehicles/vehiclesModel";
import { AddTripData } from "./tripsInterface";
import { Trips } from "./tripsModel";
import { Terminals } from "../Terminals";
import { AppError } from "../../utils";
import { VehicleStatus, TripStatus } from "../../enums";

export class TripsService {
    public addATrip = async (tripData: AddTripData) => {
        if (tripData.arrivalTerminalId === tripData.departureTerminalId) {
            throw new AppError("Same terminal selected for both arrival and departure!");

        }
        const arrivalTerminal = await Terminals.findOneOrFail({ id: tripData.arrivalTerminalId })
            .catch((err) => {
                throw new AppError(`Invalid arrival terminal selected!`, err);

            });

        const departureTerminal = await Terminals.findOneOrFail({ id: tripData.departureTerminalId })
            .catch((err) => {
                throw new AppError(`Invalid departure terminal selected!`, err);

            });

        const vehicle = await Vehicles.findOneOrFail({
            where: [{
                id: tripData.vehicleId,
                status: VehicleStatus.AVAILABLE,
            }],
        }).catch((err) => {
            throw new AppError(`Invalid vehicle selected!`, err);
        });

        const trip = Trips.create(tripData);
        trip.departureTerminal = departureTerminal;
        trip.arrivalTerminal = arrivalTerminal;
        trip.vehicle = vehicle;

        const seats = [];
        for (let i = 1; i <= vehicle.type.seatsNumber; i++) {
            seats.push({ seatNumber: i });
        }

        trip.seats = await Seats.save(seats);
        return await trip.save();
    }

    public getTripsByStatus = async (status: TripStatus) => {
        return Trips.find({ where: [{ status }], relations: ["vehicle", "seats"] });
    }
}
