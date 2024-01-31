const httpStatus = require('http-status');
const { authService, userService } = require('../services');
const { generateToken } = require('../utils/generateToken');

const signup = async (req, res) => {

    const user = await userService.createUser(req.body);
    const token = await generateToken(user.toJSON());
    res.status(httpStatus.CREATED).send({ user, token });
}

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const token = await generateToken(user);

    res.send({ user, token });
}

module.exports = {
    signup,
    login
}