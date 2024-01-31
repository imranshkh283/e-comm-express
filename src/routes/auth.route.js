const express = require('express');
const validate = require('../middlewares/validate');
const authController = require('../controllers/auth.controller')
const { signinValidation, signupValidation } = require('../validations');

const router = express.Router();

router.post('/sign-up', validate(signupValidation), authController.signup)
router.post('/sign-in', validate(signinValidation), authController.login)

module.exports = router;