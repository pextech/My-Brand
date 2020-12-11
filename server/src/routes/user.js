import express from "express";
import user from "../controllers/user";
import asyncHandler from "../middlewares/async";
import { registerValidator, loginValidator } from "../util/schemes/user";

const router = express.Router();

router.route("/register").post(registerValidator, asyncHandler(user.register));
router.route("/login").post(loginValidator, asyncHandler(user.login));

export default router;
