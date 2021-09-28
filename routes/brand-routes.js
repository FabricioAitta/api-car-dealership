const express = require('express')
const router = express.Router()
const { getAllBrands, createBrand } = require('../controllers/index')
const checkJWT = require('../middleware/Jwt')

router.get('/', getAllBrands)
router.post('/create', createBrand)

module.exports = router