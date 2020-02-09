import Joi from "@hapi/joi";

export const terminalsValidationSchema = Joi.object().keys({
    name: Joi.string().lowercase().required(),
    stateId: Joi.number().required(),
    lgaId: Joi.number().required(),
});
