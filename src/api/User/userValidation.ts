import { profileValidationSchema } from "./../Profile";
import Joi from "@hapi/joi";
import { IUser } from "./IUser";

export const UserValidationSchema = Joi.object().keys(<IUser> {
    firstName: Joi.string().max(30),
    lastName: Joi.string().max(30),
    email: Joi.string().email(),
    phoneNumber: Joi.string(),
    gender: Joi.string().valid("male", "female"),
    profile: profileValidationSchema,
});
