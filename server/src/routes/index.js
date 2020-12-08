import { Router } from "express";
import blogRoutes from "./blog";
<<<<<<< HEAD
=======
import queryRoutes from "./query";
>>>>>>> ft(Query):creating query

const router = Router();

router.use("/blog", blogRoutes);
<<<<<<< HEAD
=======
router.use("/query", queryRoutes);
>>>>>>> ft(Query):creating query

export default router;
