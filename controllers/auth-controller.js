const mongoose = require('mongoose')
const User = require('../models/user')

const authController = {
    register: (req, res, next) => {
        const {name, email, password} = req.body
        User.find({email: email})
        .then((user) => {
            if(user && user.length > 0) res.send(user).status(200)
            let user_create = new User({
                name: name,
                email: email,
                password: password
            })
            user_create.save()
            return res.send(user_create).status(200)
        })
        .catch((err) => res.send(err).status(400))
    },
    login: (req, res, next) => {
        const {name, email, password} = req.body
        User.find({email: email})
        .then((user) => res.send(user).status(200))
        .catch((err) => res.send(err).status(400))
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