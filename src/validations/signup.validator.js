const Joi = require("joi");

const signUpValidation = Joi.object().keys({
    name: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

module.exports = signUpValidation