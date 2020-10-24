import Joi from "@hapi/joi";

export const VehicleTypesValidationSchema = Joi.object().keys({
    model: Joi.string().required(),
    seatsNumber: Joi.number().required(),
});
