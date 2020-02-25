import { AddTripData, SearchTripData } from "./tripsInterface";
import { BaseController } from "./../baseController";
import { TripsService } from "./tripsService";
import { HttpStatusCode, TripStatus } from "../../enums";

export class TripsController extends BaseController {
    private tripsService = new TripsService();

    public createTrip = async (tripData: AddTripData) => {
        const trip = await this.tripsService.addATrip(tripData);
        return this.sendResponse({ data: trip, message: "Trip created successfully!", statusCode: HttpStatusCode.CREATED });
    }

    public getAllTrips = async ({ limit, page }) => {
        const res = await this.tripsService.getAllTrips({ limit, page });
        return this.sendResponse({ data: res[0], total: res[1] });
    }

    public getTripsByStatus = async (status: TripStatus) => {
        const trips = await this.tripsService.getTripsByStatus(status);
        return this.sendResponse({ data: trips });
    }

    public searchTrips = async (searchData: SearchTripData) => {
        const trips = await this.tripsService.searchTrips(searchData);
        return this.sendResponse({ data: trips });
    }
}
