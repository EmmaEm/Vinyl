const router = require('express').Router()
const albums = require('./albums.js')

router.use('/', albums)

module.exports = router
