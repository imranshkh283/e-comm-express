const express = require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();

//router.route('/sign-up').post(authController.signup)
router.route('/sign-in').post(authController.login)

module.exports = router;