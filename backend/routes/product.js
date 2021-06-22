const express = require('express');
const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const { isAuthenticated } = require('../middlewares/auth');

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticated, newProduct);

router
  .route('/admin/product/:id')
  .put(isAuthenticated, updateProduct)
  .delete(isAuthenticated, deleteProduct);

module.exports = router;
