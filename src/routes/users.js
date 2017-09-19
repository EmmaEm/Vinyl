const router = require('express').Router()
const users = require('../db/queries/users.js')

const createCookie = (req, user) => {
  req.session.user = user
  req.session.save((error) => {
    if (error) {
      console.error('Error saving session')
      throw error
    }
  })
}

router.get('/sign-up', (req, res) => {
  res.render('users/sign-up')
})

router.post('/sign-up', (req, res) => {
  users.create(req.body.name, req.body.email, req.body.password)
    .then((user) => {
      createCookie(req, user)
      res.redirect(`users/${user.id}`)
    })
    .catch((error) => {
      res.redirect('/sign-up')
      throw error
    })
})

router.get('/sign-in', (req, res) => {
  res.render('users/sign-in')
})

router.post('/sign-in', (req, res) => {
  users.getByEmail(req.body.email)
    .then((user) => {
      if (user.password === req.body.password) {
        createCookie(req, user)
        // if (req.query.redirectUrl) {
        //   return res.redirect(req.query.redirectUrl)
        res.redirect(`/users/${user.id}`)
      } else {
        console.error('Incorrect password')
        res.redirect('/sign-in')
      }
    })
})

router.get('/sign-out', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error('Error destroying session')
      throw error
    } else res.redirect('/')
  })
})

router.get('/users/:userId', (req, res) => {
  res.render('users/profile')
})

module.exports = router
