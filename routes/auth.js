const express = require('express')
const router = express.Router()
const { register, login, update, deleteUser } = require('../controllers/index')
const checkJWT = require('../middleware/Jwt')

router.post('/register', register)
router.post('/login', login)
router.post('/update/:id', update)
router.post('/delete/:id', deleteUser)

module.exports = router