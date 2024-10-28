
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
// get all orders by email
const getOrderByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const orders = await OrdersModel.find({ email });
        if(!orders) {
            return res.status(404).json({ message: "No orders found" });
        }
        // console.log(orders)
        res.status(200).json(orders.sort((a, b) => b.createdAt - a.createdAt));
    } catch (error) {
        res.status(500).json({ message: "Error retrieving orders" });
    }
}


export { createOrder, getOrderByEmail };