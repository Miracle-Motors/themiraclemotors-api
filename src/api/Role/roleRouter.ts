import { RoleValidationSchema } from "./roleValidation";
import { RoleController } from "./roleController";
import express from "express";
import { validation } from "../../middleware";
import { controllerHandler } from "../../utils";

const router = express.Router();
const call = controllerHandler;
const Role = new RoleController();

router.use(validation(RoleValidationSchema));

router.get("/", call(Role.getAllRoles, (req, _res, _next) => []));
router.post("/", call(Role.createRole, (req, _res, _next) => [req.body]));

export const roleRouter = router;
