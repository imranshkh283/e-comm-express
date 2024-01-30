const httpStatus = require('http-status');
const { authService } = require('../services');
const { generateToken } = require('../utils/generateToken');

const signUp = async (req, res) => {

    const user = await userService.createUser(req.body);

    res.status(httpStatus.CREATED).send({ user });
}

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const token = await generateToken(user);

    res.send({ user, token });
}

module.exports = {
    signUp,
    login
}