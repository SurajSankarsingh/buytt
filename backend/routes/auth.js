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
  allUsers,
  getUserDetails,
  udpateUser,
  deleteUser,
} = require('../controllers/auth.controller');

const { isAuthenticated, authorizedRoles } = require('../middlewares/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticated, getUserProfile);
router.route('/me/update').put(isAuthenticated, udpateProfile);
router.route('/password/update').put(isAuthenticated, updatePassword);

router
  .route('/admin/users')
  .get(isAuthenticated, authorizedRoles('admin'), allUsers);
router
  .route('/admin/user/:id')
  .get(isAuthenticated, authorizedRoles('admin'), getUserDetails)
  .put(isAuthenticated, authorizedRoles('admin'), udpateUser)
  .delete(isAuthenticated, authorizedRoles('admin'), deleteUser);

module.exports = router;
