const db = require("../models");

//create main model
const Product = db.products;

// create Product
const addProduct = async (req, res) => {
  try {
    const info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    };
    const product = await Product.create(info);
    res.status(200).send(product);
  } catch (error) {
    res.send({ message: error.message });
  }
};

//get all products

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({});
    /**if you want very specific attr from the model then
  set attributes on the model object like
  atributes: [
    'title', 'price', 'description',.....
  ] */
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
//get single products

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ where: { id: id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
// update product
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    Product.destroy({ where: { id: id } });
    res.status(200).send("Deleted it successfully!");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
// delete product
const publishedProduct = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { published: true } });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  publishedProduct,
  updateProduct,
};
