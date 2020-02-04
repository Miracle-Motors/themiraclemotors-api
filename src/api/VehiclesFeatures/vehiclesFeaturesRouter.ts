import { vehiclesFeaturesValidationSchema } from "./vehiclesFeaturesValidation";
import { VehiclesFeaturesController } from "./vehiclesFeaturesController";
import express from "express";
import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";

const router = express.Router();
const call = controllerHandler;
const vehiclesFeatures = new VehiclesFeaturesController();

router.use(validation(vehiclesFeaturesValidationSchema));

router.get("/", call(vehiclesFeatures.getVehicleFeatures, (req, _res, _next) => []));
router.post("/", call(vehiclesFeatures.createVehicleFeatureAttribute, (req, _res, _next) => [req.body]));

export const vehiclesFeaturesRouter = router;
