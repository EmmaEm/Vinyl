const router = require('express').Router()
const albums = require('./albums.js')
const users = require('./users.js')
const reviews = require('./reviews.js')
const home = require('./home.js')

router.use((req, res, next) => {
  let loggedIn = false
  let userId = null
  if (req.session.user) {
    loggedIn = true
    userId = req.session.user.user_id
  }
  res.locals = {loggedIn, userId}
  next()
})

router.use('/', albums)
router.use('/', users)
router.use('/', reviews)
router.use('/', home)

module.exports = router
