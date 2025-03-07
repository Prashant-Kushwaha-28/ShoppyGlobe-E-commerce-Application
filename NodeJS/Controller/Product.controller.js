import { ProductModel } from "../Model/Products.model.js";

//  Create a new product
export async function createProduct(req, res) {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to create product", error: error.message });
  }
}

//  Fetch all products
export async function fetchProducts(req, res) {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
}

//  Fetch a single product by ID
export async function fetchProductById(req, res) {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
}

//  Update Product Details
export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error: error.message });
  }
}

//  Delete a product
export async function deleteProduct(req, res) {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error: error.message });
  }
}
