import Joi from "@hapi/joi";
import { IUser } from "./IUser";

export const UserValidationSchema = Joi.object().keys(<IUser> {
    firstName: Joi.string().max(30).required(),
    lastName: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    gender: Joi.string().valid("male", "female").required(),
});
