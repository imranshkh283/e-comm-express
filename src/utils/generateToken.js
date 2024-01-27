const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config/config');

const generateToken = (userId) => {
    const expires = moment().add(config.jwt.resetPasswordExpirationMinutes, 'minutes');
    const payload = {
        sub: userId,
        iat: moment().unix(),
        exp: expires.unix(),
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
}

module.exports = {
    generateToken
};