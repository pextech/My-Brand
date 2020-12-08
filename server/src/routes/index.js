import { Router } from "express";
import blogRoutes from "./blog";
import queryRoutes from "./query";
import userRoutes from "./user";

const router = Router();

router.use("/blog", blogRoutes);
router.use("/query", queryRoutes);
router.use("/user", userRoutes);

export default router;
