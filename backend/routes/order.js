const express = require('express');
const router = express.Router();

const { newOrder } = require('../controllers/order.controller');

const { isAuthenticated, authorizedRoles } = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticated, newOrder);

module.exports = router;
