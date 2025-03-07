import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./Routes/auth.routes.js";
import productRoutes from "./Routes/products.routes.js";
import cartRoutes from "./Routes/cart.routes.js";
import authMiddleware from "./middlewares/auth.middleware.js";

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
//app.use("/api/product", authMiddleware,productRoutes);
app.use("/api/cart", authMiddleware, cartRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
