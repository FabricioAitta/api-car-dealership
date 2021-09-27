const express = require('express')
const router = express.Router()
const { getAllCars, getCarById, createCar } = require('../controllers/index')
const checkJWT = require('../middleware/Jwt')

router.get('/', getAllCars)
router.post('/create', checkJWT, createCar)
router.get('/:id', getCarById)

module.exports = router