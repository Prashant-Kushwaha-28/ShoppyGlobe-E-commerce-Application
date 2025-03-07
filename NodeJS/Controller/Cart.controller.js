import mongoose from "mongoose";
import { CartModel, ProductModel } from "../Model/Products.model.js";

// Add to Cart
export async function addToCart(req, res) {
  try {
    console.log("Received Request:", req.body);

    const { productId, quantity } = req.body;
    const userId = req.user?.id;

    // Check if product exists in the database
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if requested quantity exceeds available stock
    if (product.quantity < quantity) {
      return res.status(400).json({ message: "Exceeds available stock" });
    }

    let cartItem = await CartModel.findOne({ productId, userId });
    if (cartItem) {
      if (cartItem.quantity + quantity > product.quantity) {
        return res.status(400).json({ message: "Exceeds available stock" });
      }
      cartItem.quantity += quantity;
    } else {
      cartItem = new CartModel({ productId, userId, quantity });
    }

    await cartItem.save();
    res.status(201).json({ message: "Product added to cart successfully", cart: cartItem });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to add to cart", error: error.message });
  }
}


// Fetch all cart items for the user
export async function fetchCart(req, res) {
  try {
    const userId = req.user?.id;
    const cartItems = await CartModel.find({ userId }).populate("productId");
    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch cart items", error: error.message });
  }
}

// Fetch a specific cart item by ID
export async function fetchCartById(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid cart item ID" });
    }

    const cartItem = await CartModel.findById(id).populate("productId");
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch cart item", error: error.message });
  }
}

// Update Cart Quantity
export async function updateCartQuantity(req, res) {
  try {
    const { id } = req.params;
    let { quantity } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id) || quantity < 1) {
      return res.status(400).json({ message: "Invalid cart item ID or quantity" });
    }

    const cartItem = await CartModel.findById(id).populate("productId");
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    if (quantity > cartItem.productId.quantity) {
      return res.status(400).json({ message: "Not enough stock available" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();
    res.status(200).json({ message: "Cart updated successfully", cart: cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update cart", error: error.message });
  }
}

// Remove from Cart
export async function removeFromCart(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid cart item ID" });
    }

    const cartItem = await CartModel.findOne({ _id: id, userId });
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found or unauthorized" });
    }

    await CartModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to remove from cart", error: error.message });
  }
}