const mongoose = require('mongoose')
const User = require('../models/user')

const authController = {
    register: (req, res, next) => {
        const {name, email, password} = req.body
        User.find({email: email})
        .then((user) => {
            let user_create = new User({
                name: name,
                email: email,
                password: password
            })
            return res.status(200).send(user_create)
        })
        .catch((err) => res.send(err).status(400))
    },
    login: (req, res, next) => {
        const {name, email, password} = req.body
        User.find({email: email})
        .then((user) => res.status(200).send(user))
        .catch((err) => res.status(400).send(err))
    },
    update: (req, res, next) => {
        res.send("hola")
    }
}

module.exports = {
    register: authController.register,
    login: authController.login,
    update: authController.update
}