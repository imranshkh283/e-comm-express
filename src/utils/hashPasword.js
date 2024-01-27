const bcrypt = require('bcryptjs');

const bcryptPassword = (password) => {
    return bcrypt.hash(password, 10);
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = {
    bcryptPassword,
    comparePassword
};

