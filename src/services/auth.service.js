const { User } = require('../models');

const { getUserByEmail, isUserPasswordMatch } = require('./user.service');

const loginUserWithEmailAndPassword = async (username, password) => {

    const user = await getUserByEmail(username);
    const pass = await isUserPasswordMatch(password, user);

    if (!user || !isUserPasswordMatch(password, user)) {
        throw new Error('User not found');
    }
    console.log(user);
}

module.exports = {
    loginUserWithEmailAndPassword
}