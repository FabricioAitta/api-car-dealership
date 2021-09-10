const express = require('express')
const router = express.Router()
const { getAllBrands, getAllByBrandId, createBrand } = require('../controllers/index')

router.get('/', getAllBrands)
router.get('/:id', getAllByBrandId)
router.post('/create', createBrand)

module.exports = router