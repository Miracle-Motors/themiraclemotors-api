import express from "express";
import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";
import { SettingsValidationSchema } from "./settingsValidation";
import { SettingsController } from "./settingsController";

const router = express.Router();
const call = controllerHandler;
const Settings = new SettingsController();

router.use(validation(SettingsValidationSchema));

router.get("/", call(Settings.getSettings, (req, _res, _next) => []));
router.put("/:id", call(Settings.updateSettings, (req, _res, _next) => [req.params.id, req.body]));

export const settingsRouter = router;
