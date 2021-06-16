const express = require('express');
const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProduct,
} = require('../controllers/product.controller');

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/product/new').post(newProduct);

module.exports = router;
