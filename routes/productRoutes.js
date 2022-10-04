const {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  publishedProduct,
} = require("../controllers/productController");

const router = require("express").Router();
//get all products
router.get("/", getAllProducts);
//create product
router.post("/addProduct", addProduct);
//published product
router.get("/published", publishedProduct);

// get a product
router.get("/:id", getProduct);
//delete product
router.delete("/:id", deleteProduct);
//update product
router.patch("/:id", updateProduct);

module.exports = router;
