const express = require('express');
const authController = require('../controllers/auth.controller')
const signUpValidation = require('../validations/signup.validator')
const validate = require('../middlewares/validate')
const router = express.Router();

router.post('/sign-up', validate(signUpValidation), authController.signUp)
router.route('/sign-in').post(authController.login)

module.exports = router;