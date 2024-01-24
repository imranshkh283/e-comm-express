const { User } = require('../models');

const createUser = async (userBody) => {
    return await User.create(userBody);
}

module.exports = {
    createUser
};