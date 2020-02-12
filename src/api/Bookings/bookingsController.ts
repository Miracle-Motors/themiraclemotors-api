import { BookTripData } from "./bookingsInterface";
import { BaseController } from "./../baseController";
import { BookingsService } from "./bookingsService";
import { HttpStatusCode } from "../../enums";

export class BookingsController extends BaseController {
    private bookingsService = new BookingsService();

    public bookATrip = async (bookingData: BookTripData) => {
        const booking = await this.bookingsService.bookATrip(bookingData);
        return this.sendResponse(booking, "Booking successful!", HttpStatusCode.CREATED);
    }
}
