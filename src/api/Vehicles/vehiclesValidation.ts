import Joi from "@hapi/joi";

export const VehiclesValidationSchema = Joi.object().keys({
    plateNumber: Joi.string().uppercase().min(8).max(9).required(),
    typeId: Joi.string().uuid().required(),
    description: Joi.string().optional(),
    features: Joi.array().items(Joi.object().keys({
        id: Joi.string().uuid().required(),
    })).required(),
});
