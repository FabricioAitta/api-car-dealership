const { getAllCars, getCarById, createCar } = require('./cars-controller')
const { getAllBrands, createBrand } = require('./brand-controller')

module.exports = { getAllCars, getCarById, createCar, getAllBrands, createBrand }