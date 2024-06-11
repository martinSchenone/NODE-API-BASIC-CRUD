// File to manage routes calls

const express = require("express");
const router = express.Router();

// product controllers, there're what the specific route are going to do
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// all the routes paths, and what are the routes going to do
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
