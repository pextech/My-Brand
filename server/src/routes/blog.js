import express from "express";
import blog from "../controllers/blog";
import asyncHandler from "../middlewares/async";
import { blogValidator } from "../middlewares/validators";

const router = express.Router();

router
  .route("/")
  .post(blogValidator, asyncHandler(blog.create))
  .get(asyncHandler(blog.getAll));

router
  .route("/:id")
  .get(asyncHandler(blog.getOne))
  .put(asyncHandler(blog.update));

export default router;
