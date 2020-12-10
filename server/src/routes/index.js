import { Router } from "express";
import blogRoutes from "./blog";

const router = Router();

router.use("/blog", blogRoutes);

export default router;
