const { createUser } = require('../services/user.service');
const { User } = require('../models/user.model');

describe('User Service', () => {

    const data = {
        name: "Imran",
        email: "Imran@gmail.com",
        _id: "65b0d6bb1eb0c0ffc07da794",
        __v: 0
    }

    it('should create a user', () => {
        const userData = {
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
    });
});