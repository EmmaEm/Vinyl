const router = require('express').Router()
// const db = require('../db')

router.get('/users/:userId', (req, res) => {
  res.render('users/profile')
})

module.exports = router
