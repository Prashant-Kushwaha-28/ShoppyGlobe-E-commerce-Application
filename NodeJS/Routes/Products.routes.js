import express from "express";
import {
  createProduct,
  fetchProducts,
  fetchProductById,
  updateProduct,
  deleteProduct,
} from "../Controller/Product.controller.js";
import { validateProduct } from "../middlewares/validation.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Product Routes
router.post("/", authMiddleware, validateProduct, createProduct);
router.get("/", authMiddleware, fetchProducts);
router.get("/:id", authMiddleware, fetchProductById);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;