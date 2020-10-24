import express from "express";
import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";
import { profileValidationSchema } from "./profileValidation";
import { ProfileController } from "./profileController";

const router = express.Router();
const call = controllerHandler;
const Profile = new ProfileController();

router.use(validation(profileValidationSchema));

router.put("/me", call(Profile.updateUserProfile, (req, _res, _next) => [req.user, req.body]));

export const profileRouter = router;
