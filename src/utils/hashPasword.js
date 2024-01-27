const bcrypt = require('bcryptjs');

const bcryptPassword = (password) => {
    return bcrypt.hash(password, 10);
}

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    bcryptPassword,
    comparePassword
};

