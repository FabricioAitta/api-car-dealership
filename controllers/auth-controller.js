const mongoose = require('mongoose')
const User = require('../models/user')

const authController = {
    register: (req, res, next) => {
        User.find()
        .then((cars) => res.send(cars).status(200))
        .catch((err) => res.send(err).status(400))
    },
    login: (req, res, next) => {
        User.findById({_id: req.params.id})
        .then((car) => res.send(car).status(200))
        .catch((err) => res.send(err).status(400))
    },
    update: (req, res, next) => {
        res.send("ruta no funcional")
        // User.create(req.body)
        // .then((car) => res.send(car).status(200))
        // .catch((err) => res.send(err).status(400))
    }
}

module.exports = {
    register: authController.register,
    login: authController.login,
    update: authController.update
}