import express from "express";
import blog from "../controllers/blog";
import asyncHandler from "../middlewares/async";
import { blogValidator } from "../util/schemes/blog";
import { protect } from "../middlewares/auth";

const router = express.Router();

router
  .route("/")
  .post(blogValidator, asyncHandler(blog.create))
  .get(asyncHandler(blog.getAll));

router
  .route("/:id")
  .get(asyncHandler(blog.getOne))
  .patch(asyncHandler(protect, blog.update))
  .delete(asyncHandler(blog.delete));

router.route("/:id/comments").post(asyncHandler(blog.comment));

export default router;
