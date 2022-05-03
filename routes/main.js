const express = require('express')

const router = express.Router()

const {login, dashboard} = require('../controllers/main')

const authorizationMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authorizationMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router