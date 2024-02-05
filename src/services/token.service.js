const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const { Token } = require('../models');
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

const saveToken = async (token, userId, expires, type, blacklisted = false) => {
    const tokenDoc = await Token.create({
        token,
        user: userId,
        expires: expires.toDate(),
        type,
    });
    return tokenDoc;
}

module.exports = {
    generateToken,
    saveToken
};