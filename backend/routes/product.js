const express = require('express');
const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const { isAuthenticated } = require('../middlewares/auth')

router.route('/products').get(isAuthenticated, getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(newProduct);

router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;
