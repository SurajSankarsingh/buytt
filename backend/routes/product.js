const express = require('express');
const router = express.Router();

const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
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

router.route('/review').put(isAuthenticated, createProductReview);
router
  .route('/reviews')
  .get(isAuthenticated, getProductReviews)
  .delete(isAuthenticated, deleteReview);

module.exports = router;
