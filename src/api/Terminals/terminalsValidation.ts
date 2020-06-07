import Joi from "@hapi/joi";

export const addTerminalsValidationSchema = Joi.object().keys({
    name: Joi.string().lowercase().required(),
    stateId: Joi.number().required(),
    lgaId: Joi.number().required(),
});

export const updateTerminalsValidationSchema = Joi.object().keys({
    name: Joi.string().lowercase().optional(),
    stateId: Joi.number().optional(),
    lgaId: Joi.number().optional(),
});
