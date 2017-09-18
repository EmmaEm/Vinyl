const router = require('express').Router()
// const db = require('../db')

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in')
})

module.exports = router
