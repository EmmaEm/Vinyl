const router = require('express').Router()
const db = require('../db')

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

module.exports = router
