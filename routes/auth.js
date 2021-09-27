const express = require('express')
const router = express.Router()
const { register, login, update } = require('../controllers/index')
const checkJWT = require('../middleware/Jwt')

router.post('/register', register)
router.post('/login', login)
router.post('/update', checkJWT, update)

module.exports = router