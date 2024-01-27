const jwt = require('jsonwebtoken');
const { User } = require('../models');
const bcryptPassword = require('../utils/hashPasword');
const { generateToken } = require('../utils/generateToken');

const createUser = async (userBody) => {
    const { password, ...userBodyWithoutPassword } = userBody;
    if (await User.isEmailTaken(userBody.email)) {
        // throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    const hashPassword = await bcryptPassword(password);
    const user = await User.create({ ...userBodyWithoutPassword, password: hashPassword });
    const token = await generateToken(user.toJSON());
    return { token, user: user.toJSON() };
}


module.exports = {
    createUser
};