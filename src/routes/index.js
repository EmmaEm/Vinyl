const router = require('express').Router()
const albums = require('./albums.js')
const authentication = require('./authentication.js')
const users = require('./users.js')

router.use('/', albums)
router.use('/', authentication)
router.use('/', users)

module.exports = router
