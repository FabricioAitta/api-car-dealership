const { getAllCars, getCarById, createCar } = require('./cars-controller')
const { getAllBrands, getAllByBrandId, createBrand } = require('./brand-controller')
const { register, login, update } = require('./auth-controller')

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    getAllBrands,
    getAllByBrandId,
    createBrand,
    register,
    login,
    update
}