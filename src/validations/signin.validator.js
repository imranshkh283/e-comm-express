const Joi = require("joi");

const signinValidation = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

module.exports = signinValidation