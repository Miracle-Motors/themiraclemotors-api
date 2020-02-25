import { Users } from "./../User/userModel";
import { Passengers } from "./passengersModel";
import { AppError } from "./../../utils";
import { Bookings } from "./bookingsModel";
import { BookTripData } from "./bookingsInterface";
import { Trips, Seats } from "../Trips";
import { In } from "typeorm-plus";
import { SeatStatus, TripStatus, BookingType } from "../../enums";
import md5 from "md5";
import { PaymentsService, Payments } from "../Payments";

export class BookingsService {

    public bookATrip = async (bookingData: BookTripData, user: Users) => {

        const trips = await this.validateTrips(bookingData);
        const tripsSeats: {
            [tripId: string]: {
                seats: Seats[],
            },
        } = await this.validateSeats(bookingData);

        const paymentModel = await this.verifyPayment(trips, bookingData.paymentRef);
        const passengers = await Passengers.save(bookingData.passengers);
        const refId = `${trips[0].departureTerminal.name[0]}${trips[0].arrivalTerminal.name[0]}-${md5(Date.now().toString()).slice(0, 6)}`;

        const bookingModels: Bookings[] = [];
        for (const trip of trips) {
            const bookingModel = Bookings.create(bookingData as any);
            bookingModel.trip = trip;
            bookingModel.user = user;
            bookingModel.seats = tripsSeats[trip.id].seats;
            bookingModel.passengers = passengers;
            bookingModel.referenceId = refId.toUpperCase();
            bookingModel.payment = paymentModel;
            bookingModels.push(bookingModel);
        }

        const bookings = await Bookings.save(bookingModels);

        /* Update seat status */
        for (const trip of Object.values(tripsSeats)) {
            for (const seat of trip.seats) {
                seat.status = SeatStatus.BOOKED;
                await seat.save();
            }
        }
        await this.checkTripStatus(trips);
        return bookings;
    }

    public getBookingsByUser = async (user: Users) => {
        return Bookings.find({
            where: [
                { user },
            ],
            relations: ["seats", "passengers", "payment"],
            order: { createdAt: "DESC" },
        });
    }

    private async validateTrips(bookingData: BookTripData) {
        const tripIds = bookingData.bookings.map((val) => val.tripId);

        const trips = await Trips.find({
            where: [{
                id: In(tripIds),
                status: TripStatus.AVAILABLE,
            }],
        });
        if (trips.length == 0) {
            throw new AppError(`Invalid trips selected`);
        } else if (bookingData.type == BookingType.ROUND_TRIP && trips.length != 2) {
            throw new AppError(`Please select two trips to book a round trip!`);
        } else if (bookingData.type == BookingType.ONE_WAY && trips.length != 1) {
            throw new AppError(`Please select only one trip to book a one way trip!`);
        }
        return trips;
    }

    private async validateSeats(bookingData: BookTripData) {
        const tripsSeats: {
            [tripId: string]: {
                seats: Seats[],
            },
        } = {};
        for (const trip of bookingData.bookings) {
            const seats = await Seats.find({
                where: [
                    {
                        id: In(trip.seats),
                        trip: trip.tripId,
                        status: SeatStatus.AVAILABLE,
                    },
                ],
            });
            if (!seats || seats.length == 0) {
                throw new AppError(`All selected seats has already been booked for this trip! Please select another seat(s).`, seats);
            } else if (seats.length < bookingData.numberOfTravellers) {
                throw new AppError(`Please select ${bookingData.numberOfTravellers} seats. Only ${seats.length} selected!`, seats);
            }
            tripsSeats[trip.tripId] = { seats };
        }
        return tripsSeats;
    }

    /**
     * Verifies payment and returns payment model object
     *
     * @private
     * @param {string} paymentReference
     * @returns
     * @memberof BookingsService
     */
    private async verifyPayment(trips: Trips[], paymentReference: string) {
        const tripPrices = trips.map((trip) => Number(trip.price));
        const expectedTotal = tripPrices.reduce((prevTrip, curTrip) => prevTrip + curTrip);
        const paymentService = new PaymentsService();
        const verifyPaymentRes = await paymentService.verifyPayment(paymentReference);
        if (verifyPaymentRes.status && verifyPaymentRes.data.status == "success") {
            const paymentData = verifyPaymentRes.data;
            const amount = paymentData.amount / 100;
            if (expectedTotal == amount) {
                const paymentModel = {
                    amount: String(amount),
                    method: paymentData.channel,
                    processor: "paystack",
                    referenceId: paymentData.reference,
                };
                return Payments.create(paymentModel);
            }
            throw new AppError(`Expected payment of ${expectedTotal} but got ${amount}!`);
        }
        throw new AppError(`${verifyPaymentRes.data ? verifyPaymentRes.data.gateway_response : verifyPaymentRes.message}`,
            verifyPaymentRes.data,
        );
    }

    /**
     * Checks if trip still has available seats if not mark trip as booked
     *
     * @private
     * @param {Trips} trip
     * @memberof BookingsService
     */
    private async checkTripStatus(trips: Trips[]) {
        for (const trip of trips) {
            const availableSeats = await Seats.find({
                where: [
                    {
                        trip: trip.id,
                        status: SeatStatus.AVAILABLE,
                    },
                ],
            });

            if (availableSeats.length == 0) {
                trip.status = TripStatus.BOOKED;
                await trip.save();
            }
        }
    }
}
