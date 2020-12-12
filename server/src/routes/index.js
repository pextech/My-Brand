import { Router } from "express";
import blogRoutes from "./blog";
import queryRoutes from "./query";
import userRoutes from "./user";

const router = Router();

router.use("/api/v1", blogRoutes);
router.use("/api/v1", queryRoutes);
router.use("/api/v1", userRoutes);
router.use("*", (req, res) => {
  res.status(404).json({ success: false, msg: "route not found" });
});

export default router;
