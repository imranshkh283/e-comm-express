const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const { Token } = require('../models');
const config = require('../config/config');
const { tokenTypes } = require('../config/tokens');
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

const generateAuthTokens = async (user) => {
    const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
    const accessToken = generateToken(user.id, accessTokenExpires, tokenTypes.ACCESS);

    const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
    const refreshToken = generateToken(user.id, refreshTokenExpires, tokenTypes.REFRESH);
    await saveToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH);

    return {
        access: {
            token: accessToken,
            expires: accessTokenExpires.toDate(),
        },
        refresh: {
            token: refreshToken,
            expires: refreshTokenExpires.toDate(),
        },
    };
};

module.exports = {
    generateToken,
    saveToken,
    generateAuthTokens,
};