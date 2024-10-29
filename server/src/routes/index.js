import express from "express";
import bookRoutes from "./booksroutes.js";
import userRoutes from "./userroutes.js";
import ordersRoutes from "./ordersRoute.js";
import AdminStats from './adminStats.js'
const router = express.Router();
router.use("/books", bookRoutes);
router.use("/orders", ordersRoutes);
router.use("/auth", userRoutes);
router.use("/admin",AdminStats );

export default router;
