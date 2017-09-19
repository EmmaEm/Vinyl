const router = require('express').Router()
const users = require('../db/queries/users.js')

const createCookieAndRedirect = (req, res, user) => {
  req.session.user = user
  req.session.save((error) => {
    if (error) {
      console.error('Error saving session')
      throw error
    } else {
      // if (req.query.redirectUrl) {
      //   return res.redirect(req.query.redirectUrl)
      res.redirect(`users/${user.id}`)
    }
  })
}

router.get('/sign-up', (req, res) => {
  res.render('users/sign-up')
})

router.post('/sign-up', (req, res) => {
  users.create(req.body.name, req.body.email, req.body.password)
    .then((user) => {
      createCookieAndRedirect(req, res, user)
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
        createCookieAndRedirect(req, res, user)
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
  users.getReviews(req.params.userId)
    .then((reviews) => {
      console.log(reviews)
      res.render('users/profile', {reviews})
    })
})

module.exports = router
