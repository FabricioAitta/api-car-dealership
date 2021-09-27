const express = require('express')
const router = express.Router()
const { getAllBrands, getAllByBrandId, createBrand } = require('../controllers/index')
const checkJWT = require('../middleware/Jwt')

router.get('/', getAllBrands)
router.post('/create', checkJWT, createBrand)
router.get('/:id', getAllByBrandId)

module.exports = router