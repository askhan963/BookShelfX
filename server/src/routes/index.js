import express from "express";
import bookRoutes from "./booksroutes.js";
import userRoutes from "./userroutes.js";
import ordersRoutes from "./ordersRoute.js";
const router = express.Router();
router.use("/books", bookRoutes);
router.use("/orders", ordersRoutes)
router.use("/auth", userRoutes);

export default router;
