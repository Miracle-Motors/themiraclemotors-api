import { VehicleTypesValidationSchema } from "./vehicleTypesValidation";
import { VehicleTypesController } from "./vehicleTypesController";
import express from "express";
import { validation } from "../../middleware";
import { controllerHandler } from "../../utils";

const router = express.Router();
const call = controllerHandler;
const Vehicle = new VehicleTypesController();

router.use(validation(VehicleTypesValidationSchema));

router.post("/", call(Vehicle.addVehicleType, (req, _res, _next) => [req.body]));

export const vehicleTypesRouter = router;
