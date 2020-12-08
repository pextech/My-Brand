import express from "express";
import user from "../controllers/user";
import asyncHandler from "../middlewares/async";
import { registerValidator } from "../util/schemes/user";

const router = express.Router();

router.route("/register").post(registerValidator, asyncHandler(user.register));

export default router;
