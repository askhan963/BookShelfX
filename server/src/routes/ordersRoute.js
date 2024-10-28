import express from "express";
import { createOrder, getOrderByEmail } from "../controllers/orders/orderController.js";
const ordersRoutes = express.Router();
//  now calling orders controllers
//  getOrders
ordersRoutes.post("/", createOrder)
ordersRoutes.get("/email/:email", getOrderByEmail)

export default ordersRoutes;
