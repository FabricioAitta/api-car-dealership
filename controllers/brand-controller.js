const mongoose = require('mongoose')
const Brand = require('../models/brand')

const brandController = {
    getAllBrands: (req, res, next) => {
        Brand.find()
        .then((brands) => res.send(brands).status(200))
        .catch((err) => res.send(err).status(400))
    },
    createBrand: (req, res, next) => {
        Brand.create(req.body)
        .then((brand) => res.send(brand).status(200))
        .catch((err) => res.send(err).status(400))
    }
}

module.exports = {
    getAllBrands: brandController.getAllBrands,
    createBrand: brandController.createBrand
}