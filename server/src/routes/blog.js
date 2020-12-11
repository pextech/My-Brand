import express from "express";
import blog from "../controllers/blog";
import asyncHandler from "../middlewares/async";
import { blogValidator } from "../util/schemes/blog";
import { protect } from "../middlewares/auth";

const router = express.Router();

router
  .route("/")
  .post(asyncHandler(blog.create))
  .get(asyncHandler(blog.getAll));

router
  .route("/:id")
  .get(asyncHandler(blog.getOne))
  .patch(protect, blog.update)
  .delete(protect, blog.delete);

router.route("/:id/comments").post(asyncHandler(blog.comment));

export default router;
