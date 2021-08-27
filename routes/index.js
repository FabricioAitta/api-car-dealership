const express = require('express')
const router = express.Router()
const carsRoutes = require('./cars-routes.js')

router.use('/cars', carsRoutes)

module.exports = router