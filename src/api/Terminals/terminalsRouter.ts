import { terminalsValidationSchema } from "./terminalsValidation";
import { TerminalsController } from "./terminalsController";
import express from "express";
import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";

const router = express.Router();
const call = controllerHandler;
const Terminals = new TerminalsController();

router.use(validation(terminalsValidationSchema));

router.get("/", call(Terminals.getTerminals, (req, _res, _next) => []));
router.post("/", call(Terminals.addTerminal, (req, _res, _next) => [req.body]));

export const terminalsRouter = router;
