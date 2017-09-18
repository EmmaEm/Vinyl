const router = require('express').Router()
const albums = require('./albums.js')
const users = require('./users.js')
const reviews = require('./reviews.js')
const home = require('./home.js')

router.use('/', albums)
router.use('/', users)
router.use('/', reviews)
router.use('/', home)

module.exports = router
