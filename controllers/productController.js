const db = require("../models");

//create main model
const Product = db.products;

// create Product
const addProduct = async (req, res) => {
  try {
    let info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    };
    const _product = await Product.create(info);
    res.status(200).send(_product);
  } catch (error) {
    res.send({ message: error.message });
  }
};
