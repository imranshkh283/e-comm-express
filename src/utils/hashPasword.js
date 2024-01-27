const bcrypt = require('bcryptjs');

const bcryptPassword = (password) => {
    return bcrypt.hash(password, 10);
}

module.exports = bcryptPassword;