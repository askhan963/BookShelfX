import express from "express";
import bookRoutes from "./booksroutes.js";
import userRoutes from "./userroutes.js";
import ordersRoutes from "./ordersRoute.js";
const router = express.Router();
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/orders", ordersRoutes)
export default router;
