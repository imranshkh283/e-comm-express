const mongoose = require("mongoose");
const { ROLE, roleRights, roles } = require("../config/role.constant");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minlength: 8,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
        },
        role: {
            type: String,
            enum: ROLE,
            default: roles.USER,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: null,
        },
    }
);

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;