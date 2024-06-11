// Controller for the logic to the calls to the db

const Product = require("../models/product.model");

// all the controllers

// api for read all products from db
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//api for read specific product from db
const getSingleProduct = async (req, res) => {
  try {
    // get the id from req.params
    const { id } = req.params;
    // initializate the model for find item by id, then show as a response.
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//api post products in DB
const createProduct = async (req, res) => {
  try {
    // initializate the model to create an product.
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// api for update specific product from db
const updateProduct = async (req, res) => {
  try {
    // get the id from req.params
    const { id } = req.params;

    // initializate the model for find by id and update, the info to update is the req.body
    const product = await Product.findByIdAndUpdate(id, req.body);

    // if product doesn't exist, return a 404 and a message
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    // check if its refreshed and save to db
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// api for delete specific product from db
const deleteProduct = async (req, res) => {
  try {
    // get the id from req.params
    const { id } = req.params;
    // initializate the model for find by id and delete
    const product = await Product.findByIdAndDelete(id, req.body);
    // if product doesn't exist, return a 404 and a message
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    // refresh db and send the new collection of the db
    const updatedProducts = await Product.find({});
    res.status(200).json(updatedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
