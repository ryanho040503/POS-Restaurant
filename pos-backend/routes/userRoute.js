const express = require('express');
const router = express.Router();

const { registerUser, login } = require('../controllers/userControllers');

// Authentication routes
router.route('/register').post(registerUser);
router.route('/login').post(login);

module.exports = router;