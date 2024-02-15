const httpStatus = require('http-status');
const { authService, userService, tokenService } = require('../services');

const signup = async (req, res) => {

    const user = await userService.createUser(req.body);
    const token = await tokenService.generateToken(user.toJSON());
    res.status(httpStatus.CREATED).send({ user, token });
}

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const token = await tokenService.generateAuthTokens(user);

    res.send({ user, token });
}

module.exports = {
    signup,
    login
}