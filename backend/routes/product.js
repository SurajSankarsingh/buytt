const express = require('express');
const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const { isAuthenticated, authorizedRoles } = require('../middlewares/auth');

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router
  .route('/admin/product/new')
  .post(isAuthenticated, authorizedRoles('admin'), newProduct);

router
  .route('/admin/product/:id')
  .put(isAuthenticated, authorizedRoles('admin'), updateProduct)
  .delete(isAuthenticated, authorizedRoles('admin'), deleteProduct);

module.exports = router;
