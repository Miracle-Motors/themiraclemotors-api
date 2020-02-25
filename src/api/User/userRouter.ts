import express from "express";
import { validation } from "../../middleware";
import { controllerHandler } from "../../utils";
import { UserController } from "./userController";
import { UserValidationSchema } from "./userValidation";

const router = express.Router();
const call = controllerHandler;
const User = new UserController();

router.use(validation(UserValidationSchema));

router.get("/", call(User.getAllUsers, (req, _res, _next) => [req.query]));
router.put("/me", call(User.updateUserInfo, (req, _res, _next) => [req.user.id, req.body]));

export const userRouter = router;
