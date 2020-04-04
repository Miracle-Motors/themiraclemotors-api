import express from "express";
// import { controllerHandler } from "../../utils";
import { validation } from "../../middleware";
import { paymentsValidationSchema } from "./paymentsValidation";
// import { PaymentsController } from "./paymentsController";

const router = express.Router();
// const call = controllerHandler;
// const Payments = new PaymentsController();

router.use(validation(paymentsValidationSchema));

// router.get("/", call(Payments.getMethod, (req, _res, _next) => []));

export const paymentsRouter = router;
