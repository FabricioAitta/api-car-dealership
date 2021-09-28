const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const User = require('../models/user')

const authController = {
    register: (req, res, next) => {
        const {name, email, password} = req.body
        User.find({email: email})
        .then((user) => {
            if(user && user.length > 0) return res.send(user).status(200)
            return User.create({
                name: name,
                email: email,
                password: password
            })
        })
        .then(async (user) => {
            user.password = await user.encryptPassword(user.password)
            user.save()
            return res.send(user)
        })
        .catch((err) => res.send(err).status(400))
    },
    login: (req, res, next) => {
        const {name, email, password} = req.body
        User.find({email: email})
        .then( async (user) => {
            let person = user[0]
            if(!person) {
                return res.send("usuario no existente").status(400)
            }
            const valid = await person.validPassword(password)
            if(!valid) {
                return res.send("credenciales invalidas").status(401)
            }
            const token = jwt.sign({ _id: person._id }, "secret")
            return res.json({ token, person }).status(200)

        })
        .catch((err) => res.send(err).status(400))
    },
    update: (req, res)  => {
        const { id } = req.params
        User.findByIdAndUpdate({ _id: id }, req.body)
        .then((user) => res.send(user))
    },
    deleteUser: (req, res) => {
        const { id } = req.params
        User.findOneAndDelete({ _id: id })
        .then(res.sendStatus(200))
        .catch((e) => res.send(e))
    },
}

module.exports = {
    register: authController.register,
    login: authController.login,
    update: authController.update,
    deleteUser: authController.deleteUser
}