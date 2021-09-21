const mongoose = require('mongoose')
const User = require('../models/user')

const authController = {
    register: (req, res, next) => {
        const {name, email, password} = req.body.user
        User.find({email: email})
        .then((user) => {
            if(!user){
                return User.create({
                    name: name,
                    email: email,
                    password: password
                })
            }
        })
        .then((user) => res.send(user).status(200))
        .catch((err) => res.send(err).status(400))
    },
    login: (req, res, next) => {
        const {name, email, password} = req.body.user
        User.find({email: email})
        .then((user) => res.send(user).status(200))
        .catch((err) => res.send(err).status(400))
    },
    update: (req, res, next) => {
        res.send("hola")
        // const [name, email, password] = req.body.user
        // User.findOneAndUpdate({email: email})
        // .then((user) => res.send(user).status(400))
        // .catch((err) => res.send(err).status(400))
    }
}

module.exports = {
    register: authController.register,
    login: authController.login,
    update: authController.update
}