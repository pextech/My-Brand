import express from "express";
import query from "../controllers/query";
import asyncHandler from "../middlewares/async";
import { QueryValidator } from "../util/schemes/blog";

const router = express.Router();

router.route("/").post(QueryValidator, asyncHandler(query.create)).get(asyncHandler(query.getAll));



export default router;
