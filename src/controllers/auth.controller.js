const httpStatus = require('http-status');
const { authService } = require('../services');


const login = async (req, res) => {

    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
}

module.exports = {
    login
}