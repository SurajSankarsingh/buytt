const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/auth.controller');

router.route('/register').post(registerUser);

module.exports = router;
