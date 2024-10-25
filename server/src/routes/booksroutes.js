import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("The books route!");
});
export default router;
