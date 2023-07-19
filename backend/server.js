require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const userController = require("./controller/userController");
const cors = require("cors");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/register", userController.registerUser);
app.post("/api/login", userController.loginUser);
app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
