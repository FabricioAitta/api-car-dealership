require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 120,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
    },
});

//INSTANCE METHODS
userSchema.methods.hash = function (password, salt) {
    return bcrypt.hash(password, salt);
};

//HOOK saves hashed password
userSchema.pre("save", function (next) {
    const user = this;
    return bcrypt
        .genSalt(10)
        .then((salt) => {
            user.salt = salt;
            return user.hash(user.password, salt);
        })
        .then((hash) => {
            user.password = hash;
            next();
        });
});

module.exports = mongoose.model("user", userSchema);
