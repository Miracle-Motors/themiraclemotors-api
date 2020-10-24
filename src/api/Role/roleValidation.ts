import Joi from "@hapi/joi";

export const RoleValidationSchema = Joi.object().keys({
    role: Joi.string().lowercase().valid("driver", "user", "admin").required(),
});
