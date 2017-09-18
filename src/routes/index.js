const router = require('express').Router()
const albums = require('./albums.js')
const authentication = require('./authentication.js')

router.use('/', albums)
router.use('/', authentication)

module.exports = router
