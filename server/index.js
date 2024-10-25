import express from "express";
import env from "dotenv";
import connectDB from "./src/config/db.js";
import routes from "./src/routes/index.js";

env.config();
const app = express();

const PORT = process.env.PORT || 5000;
//  conncet database
connectDB();

//  calling routes from routes folder index js
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
