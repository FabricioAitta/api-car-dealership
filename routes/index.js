const express = require('express')
const router = express.Router()
const carsRoutes = require('./cars-routes.js')
const brandRoutes = require('./brand-routes.js')

router.use('/cars', carsRoutes)
router.use('/brand', brandRoutes)

module.exports = router