const { User } = require('../models');

const { getUserByEmail, isUserPasswordMatch } = require('./user.service');

const loginUserWithEmailAndPassword = async (username, password) => {

    const user = await getUserByEmail(username);

    if (!user || !(await isUserPasswordMatch(password, user))) {
        throw new Error('User not found');
    }
    console.log(user);
}

module.exports = {
    loginUserWithEmailAndPassword
}