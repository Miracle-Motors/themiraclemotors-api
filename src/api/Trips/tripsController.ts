import { AddTripData } from "./tripsInterface";
import { BaseController } from "./../baseController";
import { TripsService } from "./tripsService";
import { HttpStatusCode, TripStatus } from "../../enums";

export class TripsController extends BaseController {
    private tripsService = new TripsService();

    public createTrip = async (tripData: AddTripData) => {
        const trip = await this.tripsService.addATrip(tripData);
        return this.sendResponse(trip, "Trip created successfully!", HttpStatusCode.CREATED);
    }

    public getTripsByStatus = async (status: TripStatus) => {
        const trips = await this.tripsService.getTripsByStatus(status);
        return this.sendResponse(trips);
    }
}
