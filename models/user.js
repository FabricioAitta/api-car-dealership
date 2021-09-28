const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const schema  = new mongoose.Schema({
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
    salt: {
        type: String,
    }
});

const User = mongoose.model("user", schema);

User.prototype.encryptPassword = async function (password){
    const salt = await bcrypt.genSalt(10)
    this.salt = salt
    return bcrypt.hash(password, this.salt)
}

User.prototype.validPassword = async function (passwordEnLogin) {
    return this.password === await bcrypt.hash(passwordEnLogin, this.salt)
} 

module.exports = User;