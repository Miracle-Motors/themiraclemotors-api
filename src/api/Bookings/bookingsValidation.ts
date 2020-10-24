import Joi from "@hapi/joi";
import { BookingType, PaymentType } from "../../enums";

export const bookingsValidationSchema = Joi.object().keys({
    paymentRef: Joi.string().when("paymentType", { is: PaymentType.ONLINE, then: Joi.required(), otherwise: Joi.forbidden() }),
    paymentType: Joi.valid(PaymentType.ONLINE, PaymentType.OFFLINE).required(),
    type: Joi.string().valid(BookingType.ONE_WAY, BookingType.ROUND_TRIP).required(),
    numberOfTravellers: Joi.number().required(),
    bookings: Joi.array().items(Joi.object().keys({
        tripId: Joi.string().uuid().required(),
        seats: Joi.array().items(Joi.string().uuid().required())
            .length(Joi.ref("numberOfTravellers", { ancestor: 3 })),
    })).min(1).max(2).required(),
    passengers: Joi.array().items(Joi.object().keys({
        name: Joi.string().required(),
        ageBracket: Joi.string().valid("adult", "child").required(),
        gender: Joi.string().valid("male", "female").required(),
        phoneNumber: Joi.number().required(),
        email: Joi.string().email().optional(),
        address: Joi.string().optional(),
    })).length(Joi.ref("numberOfTravellers")).required(),
});
