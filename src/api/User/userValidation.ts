import { profileValidationSchema } from "./../Profile";
import Joi from "@hapi/joi";
import { IUser } from "./IUser";

export const UserValidationSchema = Joi.object().keys(<IUser> {
    firstName: Joi.string().max(30).trim().optional(),
    lastName: Joi.string().max(30).trim().optional(),
    email: Joi.string().email().trim().optional(),
    phoneNumber: Joi.string().trim().optional(),
    gender: Joi.string().valid("male", "female").optional(),
    profile: profileValidationSchema,
});
