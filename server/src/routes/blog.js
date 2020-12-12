import express from "express";
import blog from "../controllers/blog";
import { blogValidator } from "../util/schemes/blog";
import { protect } from "../middlewares/auth";
import asyncHandler from "../middlewares/async";

const router = express.Router();

router
  .route("/blog")
  .post(blogValidator, asyncHandler(blog.create))
  .get(asyncHandler(blog.getAll));

router
  .route("/blog/:id")
  .get(asyncHandler(blog.getOne))
  .patch(protect, asyncHandler(blog.update))
  .delete(protect, blog.delete);

router.route("/blog/:id/comments").post(asyncHandler(blog.comment));

export default router;
