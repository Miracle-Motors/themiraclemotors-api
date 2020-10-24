import Joi from "@hapi/joi";

export const LoginValidationSchema = Joi.object().keys({
    phoneNumber: Joi.number().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
});

export const SignupValidationSchema = Joi.object().keys({
    firstName: Joi.string().alphanum().required(),
    lastName: Joi.string().alphanum().required(),
    phoneNumber: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    roleId: Joi.string().uuid().optional(),
    gender: Joi.string().valid("male", "female").optional(),
});

export const RefreshTokensValidationSchema = Joi.object().keys({
    refreshToken: Joi.string()
        .uuid()
        .required(),
});
