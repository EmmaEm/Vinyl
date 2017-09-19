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
    userId = req.session.user.id
  }
  res.locals = {loggedIn, userId}
  next()
})

router.use('/', albums)
router.use('/', users)
router.use('/', home)

router.use((req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.send('you must be logged in')
  }
})

// NOTE: Any route beyond this point is only accessible by logged in users

router.use('/', reviews)

module.exports = router
