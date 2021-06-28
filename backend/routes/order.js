const express = require('express');
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
} = require('../controllers/order.controller');

const { isAuthenticated, authorizedRoles } = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticated, newOrder);

router.route('/order/:id').get(isAuthenticated, getSingleOrder);
router.route('/orders/me').get(isAuthenticated, myOrders);

router.route('/admin/orders').get(isAuthenticated, authorizedRoles('admin'), allOrders);

module.exports = router;
