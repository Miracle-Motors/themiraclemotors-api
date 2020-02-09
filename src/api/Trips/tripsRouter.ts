import { tripsValidationSchema } from "./tripsValidation";
import { TripsController } from "./tripsController";
import express from "express";
import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";

const router = express.Router();
const call = controllerHandler;
const Trips = new TripsController();

router.use(validation(tripsValidationSchema));

router.post("/", call(Trips.createTrip, (req, _res, _next) => [req.body]));
router.get("/:status", call(Trips.getTripsByStatus, (req, _res, _next) => [req.params.status]));

export const tripsRouter = router;
