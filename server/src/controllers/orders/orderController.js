
import OrdersModel from "../../models/Orders/OrderModel.js";
// Create Order Simple Controller


//  create order controller
const createOrder = async (req, res) => {
   try {
    const newOrder = new OrdersModel(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
   } catch (error) {
    res.send(500).json("Something went wrong");
   }
};
// get all orders controller
const getOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.send(500).json("Something went wrong");
  }
};

export { createOrder, getOrders };