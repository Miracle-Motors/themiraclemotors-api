import { VehiclesValidationSchema } from "./vehiclesValidation";
import express from "express";
import { validation } from "../../middleware";
import { controllerHandler } from "../../utils";
import { VehiclesController } from "./vehiclesController";

const router = express.Router();
const call = controllerHandler;
const Vehicle = new VehiclesController();

router.use(validation(VehiclesValidationSchema));

router.get("/", call(Vehicle.getVehicles, (req, _res, _next) => []));
router.post("/", call(Vehicle.registerVehicle, (req, _res, _next) => [req.body]));

export const vehicleRouter = router;
