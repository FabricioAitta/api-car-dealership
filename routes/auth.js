const express = require('express')
const router = express.Router()
const { getAllCars, getCarById, createCar } = require('../controllers/index')

router.get('/', getAllCars)
router.get('/:id', getCarById)
router.post('/create', createCar)

module.exports = router