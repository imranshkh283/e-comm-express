const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { bcryptPassword, comparePassword } = require('../utils/hashPasword');
const pick = require('../utils/pick');

const createUser = async (userBody) => {
    const { password, ...userBodyWithoutPassword } = userBody;
    if (await User.isEmailTaken(userBody.email)) {
        // throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    const hashPassword = await bcryptPassword(password);
    const user = await User.create({ ...userBodyWithoutPassword, password: hashPassword });
    return user;
}

const getUserByEmail = async (email) => {

    return await User.findOne({ email });
}

const isUserPasswordMatch = (password, user) => {
    return comparePassword(password, user.password);
}

module.exports = {
    createUser,
    getUserByEmail,
    isUserPasswordMatch,
};