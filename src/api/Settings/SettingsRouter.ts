import express from "express";
import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";
import { SettingsValidationSchema } from "./SettingsValidation";
import { SettingsController } from "./SettingsController";


const router = express.Router();
const call = controllerHandler;
const Settings = new SettingsController();

router.use(validation(SettingsValidationSchema));

router.get("/", call(Settings.getMethod, (req, _res, _next) => []));


export const SettingsRouter = router;
