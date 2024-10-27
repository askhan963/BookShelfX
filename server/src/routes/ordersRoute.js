import express from "express";
import { createOrder, getOrders } from "../controllers/orders/orderController.js";
const ordersRoutes = express.Router();
//  now calling orders controllers
//  getOrders
ordersRoutes.post("/", createOrder)


export default ordersRoutes;
