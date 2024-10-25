import express from "express";
import bookRoutes from "./booksroutes.js";
import userRoutes from "./userroutes.js";
const router = express.Router();
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
export default router;
