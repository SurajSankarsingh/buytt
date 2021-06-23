const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  udpateProfile,
} = require('../controllers/auth.controller');

const { isAuthenticated } = require('../middlewares/auth')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticated, getUserProfile);
router.route('/me/update').put(isAuthenticated, udpateProfile);
router.route('/password/update').put(isAuthenticated, updatePassword);

module.exports = router;
