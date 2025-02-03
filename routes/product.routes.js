const express = require("express");
const router = express.Router();
const Product = require("../models/product.models.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// Get list of all products
router.get("/products/", getProducts);

// Get a product through id
router.get("/product/:id", getProduct);

// Create a product
router.post("/product/", createProduct);

// Update a product using id
router.put("/product/:id", updateProduct);

// Delete a product using id
router.delete("/product/:id", deleteProduct);

module.exports = router;
