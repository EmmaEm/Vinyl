const router = require('express').Router()
const users = require('../db/queries/users.js')

const createCookieAndRedirect = (req, res, user, redirect) => {
  console.log('line 5', redirect);
  req.session.user = user
  req.session.save((error) => {
    if (error) {
      console.error('Error saving session')
      throw error
    } else if (redirect) {
      return res.redirect(`..${redirect}`)
    } else {
      return res.redirect(`../users/${user.name}`)
    }
  })
}

router.get('/sign-up', (req, res) => {
  res.render('users/sign-up')
})

router.post('/sign-up', (req, res) => {
  users.create(req.body.name, req.body.email, req.body.password)
    .then((user) => {
      createCookieAndRedirect(req, res, user, null)
    })
    .catch((error) => {
      res.redirect('/sign-up')
      throw error
    })
})

router.get('/sign-in', (req, res) => {
  console.log('redirect in the get', req.query.redirectUrl)
  res.render('users/sign-in', {redirectUrl: req.query.redirectUrl})
})

router.post('/sign-in', (req, res) => {
  console.log('redirect in the post', req.query.redirectUrl)
  users.getByEmail(req.body.email)
    .then((user) => {
      if (user.password === req.body.password) {
        createCookieAndRedirect(req, res, user, req.query.redirectUrl)
      } else {
        console.error('Incorrect password')
        res.redirect('/sign-in')
      }
    })
    .catch((error) => {
      res.redirect('/sign-in')
      throw error
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

router.get('/users/:name', (req, res) => {
  users.getReviews(req.params.name)
    .then((reviews) => {
      res.render('users/profile', {reviews})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
