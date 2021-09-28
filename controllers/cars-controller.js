const mongoose = require('mongoose')
const Car = require('../models/car')

const carController = {
    getAllCars: (req, res, next) => {
        const { brand } = req.query
        if(brand){
            Car.find({brand: brand}).populate('brand')
            .then((cars) => res.send(cars).status(200))
            .catch((err) => res.send(err).status(400))
        }else{
            Car.find()
            .then((cars) => res.send(cars).status(200))
            .catch((err) => res.send(err).status(400))
        }
    },
    getCarById: (req, res, next) => {
        Car.findById({_id: req.params.id}).populate('brand')
        .then((car) => res.send(car).status(200))
        .catch((err) => res.send(err).status(400))
    },
    createCar: (req, res, next) => {
        Car.create(req.body)
        .then((car) => res.send(car).status(200))
        .catch((err) => res.send(err).status(400))
    }
}

module.exports = {
    getAllCars: carController.getAllCars,
    getCarById: carController.getCarById,
    createCar: carController.createCar
}