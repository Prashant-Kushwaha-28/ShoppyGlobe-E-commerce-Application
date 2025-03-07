import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  addToCart,
  fetchCart,
  fetchCartById,
  updateCartQuantity,
  removeFromCart
} from "../Controller/Cart.controller.js";

const router = express.Router();

router.post("/", authMiddleware, addToCart);
router.get("/", authMiddleware, fetchCart);
router.get("/:id", authMiddleware, fetchCartById);
router.put("/:id", authMiddleware, updateCartQuantity);
router.delete("/:id", authMiddleware, removeFromCart);

export default router;
