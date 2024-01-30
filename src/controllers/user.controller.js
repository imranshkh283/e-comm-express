const httpStatus = require('http-status');
const userService = require('../services/user.service');

const getUser = async (req, res) => {

    res.send('get all users');
};

module.exports = {
    getUser
}