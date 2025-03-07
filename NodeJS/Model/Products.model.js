// Products.model.js
import mongoose from "mongoose";

// Define Product Schema
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 }, 
  price: { type: Number, required: true },
  images: { type: [String], required: true }
});

// Define Cart Schema
const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Fixed model name
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quantity: { type: Number, required: true, min: 1 },
});

// Register Models with Correct Names
const ProductModel = mongoose.model("Product", ProductSchema); // Changed "products" -> "Product"
const CartModel = mongoose.model("cart", cartSchema);

export { ProductModel, CartModel };
