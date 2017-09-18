const router = require('express').Router()
const users = require('../db/queries/users.js')

router.get('/sign-up', (req, res) => {
  res.render('users/sign-up')
})

router.post('/sign-up', (req, res) => {
  users.create(req.body.name, req.body.email, req.body.password)
    .then((user) => {
      req.session.user = user
      req.session.save((error) => {
        if (error) {
          console.error('Error saving session')
          throw error
        // } else if (res.locals.page) {
        //   res.redirect(res.locals.page)
        } else res.redirect(`users/${user.id}`)
      })
    })
    .catch((error) => {
      res.redirect('/sign-up')
      throw error
    })
})

router.get('/sign-in', (req, res) => {
  res.render('users/sign-in')
})

router.get('/users/:userId', (req, res) => {
  res.render('users/profile')
})

module.exports = router
