import { Router } from "express";
import blogRoutes from "./blog";
import queryRoutes from "./query";

const router = Router();

router.use("/blog", blogRoutes);
router.use("/query", queryRoutes);

export default router;
