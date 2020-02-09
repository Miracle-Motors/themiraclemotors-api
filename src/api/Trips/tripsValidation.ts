import Joi from "@hapi/joi";

export const tripsValidationSchema = Joi.object().keys({
    arrivalTerminalId: Joi.string().uuid().required(),
    departureTerminalId: Joi.string().uuid().required(),
    departureTimestamp: Joi.date().required(),
    vehicleId: Joi.string().uuid().required(),
});
