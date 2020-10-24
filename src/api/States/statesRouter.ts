import express from "express";
import { controllerHandler } from "../../utils";
import { StatesController } from "./statesController";

const router = express.Router();
const call = controllerHandler;
const States = new StatesController();

router.get("/", call(States.getStates, (req, _res, _next) => []));

export const statesRouter = router;
