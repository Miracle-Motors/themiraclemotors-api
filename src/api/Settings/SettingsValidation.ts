import Joi from "@hapi/joi";

export const SettingsValidationSchema = Joi.object().keys({
    serviceCharge: Joi.number().optional(),
});
