const router = require('express').Router()
const users = require('../db/queries/users.js')

router.get('/sign-up', (req, res) => {
  res.render('users/sign-up')
})

router.post('/sign-up', (req, res) => {
  users.create('name', 'email', 'password')
    .then((id) => {
      res.redirect(`users/${id}`)
    })
    .catch(
      // TODO: add error handling
    )
})

router.get('/sign-in', (req, res) => {
  res.render('users/sign-in')
})

router.get('/users/:userId', (req, res) => {
  res.render('users/profile')
})

module.exports = router
