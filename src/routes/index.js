const router = require('express').Router()
const albums = require('./albums.js')
const authentication = require('./authentication.js')
const users = require('./users.js')
const reviews = require('./reviews.js')

router.use('/', albums)
router.use('/', authentication)
router.use('/', users)
router.use('/', reviews)

module.exports = router
