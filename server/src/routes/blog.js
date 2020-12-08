import express from "express";
import blog from "../controllers/blog";
import asyncHandler from "../middlewares/async";

const router = express.Router();

router.route("/").post(asyncHandler(blog.create)).get(blog.getAll);
router.route("/:id").get(blog.getOne);

export default router;
