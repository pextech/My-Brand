import express from "express";
import blog from "../controllers/blog";
import asyncHandler from "../middlewares/async";

const router = express.Router();

router
  .route("/")
  .post(asyncHandler(blog.create))
  .get(asyncHandler(blog.getAll));
router.route("/:id").get(asyncHandler(blog.getOne));

export default router;
