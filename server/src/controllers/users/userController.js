import userModel from "../../models/Users/userModel.js";
import jwt from "jsonwebtoken";

const getAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await userModel.findOne({ username });

    if (!admin) {
      return res.status(404).send({ message: "Admin not found!" });
    }
    if (admin.password !== password) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
};

export { getAdmin };
