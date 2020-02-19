import Joi from "@hapi/joi";
import { BookingType } from "../../enums";

export const bookingsValidationSchema = Joi.object().keys({
    paymentRef: Joi.string().required(),
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
    })).length(Joi.ref("numberOfTravellers")).required(),
});
