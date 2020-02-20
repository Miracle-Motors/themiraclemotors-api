import { Users } from "./../User";
import { BookTripData } from "./bookingsInterface";
import { BaseController } from "./../baseController";
import { BookingsService } from "./bookingsService";
import { HttpStatusCode } from "../../enums";

export class BookingsController extends BaseController {

    private bookingsService = new BookingsService();

    public bookATrip = async (bookingData: BookTripData, user: Users) => {
        const booking = await this.bookingsService.bookATrip(bookingData, user);
        return this.sendResponse(booking, "Booking successful!", HttpStatusCode.CREATED);
    }

    public getUserBookings = async (user: Users) => {
        const bookings = await this.bookingsService.getBookingsByUser(user);
        return this.sendResponse(bookings);
    }
}
