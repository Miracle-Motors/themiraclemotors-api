import Joi from "@hapi/joi";

export const profileValidationSchema = Joi.object().keys({
    address: Joi.string().optional(),
    kinFullName: Joi.string(),
    kinPhoneNumber: Joi.number(),
});
