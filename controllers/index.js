const { getAllCars, getCarById, createCar } = require('./cars-controller')
const { getAllBrands, createBrand } = require('./brand-controller')
const { register, login, update, deleteUser } = require('./auth-controller')

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    getAllBrands,
    createBrand,
    register,
    login,
    update,
    deleteUser
}