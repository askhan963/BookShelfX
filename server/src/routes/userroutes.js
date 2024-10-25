import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("The users route!");
});
export default router;
