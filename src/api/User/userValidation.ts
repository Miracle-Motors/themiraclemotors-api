import { profileValidationSchema } from "./../Profile";
import Joi from "@hapi/joi";
import { IUser } from "./IUser";

export const UserValidationSchema = Joi.object().keys(<IUser> {
    firstName: Joi.string().max(30).trim().required(),
    lastName: Joi.string().max(30).trim().required(),
    email: Joi.string().email().trim().required(),
    phoneNumber: Joi.string().trim().required(),
    gender: Joi.string().valid("male", "female").optional(),
    profile: profileValidationSchema,
});
