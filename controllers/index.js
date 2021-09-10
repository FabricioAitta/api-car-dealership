const { getAllCars, getCarById, createCar } = require('./cars-controller')
const { getAllBrands, getAllByBrandId, createBrand } = require('./brand-controller')

module.exports = { getAllCars, getCarById, createCar, getAllBrands, getAllByBrandId, createBrand }