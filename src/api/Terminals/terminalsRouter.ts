import { authorize } from "./../../middleware/authorization";
import { addTerminalsValidationSchema, updateTerminalsValidationSchema } from "./terminalsValidation";
import { TerminalsController } from "./terminalsController";
import express from "express";
import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";

const router = express.Router();
const call = controllerHandler;
const Terminals = new TerminalsController();

router.get("/", call(Terminals.getTerminals, (req, _res, _next) => [req.query]));

router.post("/", [authorize, validation(addTerminalsValidationSchema)], call(Terminals.addTerminal, (req, _res, _next) => [req.body]));

router.put("/:id", [authorize, validation(updateTerminalsValidationSchema)],
    call(Terminals.updateTerminal, (req, _res, _next) => [req.params.id, req.body]));

router.delete("/:id", [authorize], call(Terminals.deleteTerminal, (req, _res, _next) => [req.params.id]));

export const terminalsRouter = router;
