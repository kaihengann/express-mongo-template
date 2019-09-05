const express = require('express')
const router = express.Router()
const Ctrl = require('../controllers/sample.controller.js')

router.get('/', Ctrl.getSomething)

module.exports = router