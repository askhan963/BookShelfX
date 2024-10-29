import express from "express";
import { getAdmin } from "../controllers/users/userController.js";
const userRoutes = express.Router();

userRoutes.post('/admin', getAdmin)

export default userRoutes;
