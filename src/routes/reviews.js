const router = require('express').Router()
const albums = require('../db/queries/albums')
const reviews = require('../db/queries/reviews')

// NOTE: Everything in this file is only accessible when user is logged in.

router.get('/albums/:albumId/reviews/new', (req, res) => {
  albums.getById(req.params.albumId)
    .then((album) => {
      res.render('reviews/new-review', {album})
    })
})

router.post('/albums/:albumId/reviews/new', (req, res) => {
  const reviewContent = req.body.content
  const userId = res.locals.userId
  const albumId = req.params.albumId
  reviews.create(reviewContent, userId, albumId)
    .then(res.redirect(`/albums/${albumId}`))
})

router.delete('/deletereview/:reviewId', (req) => {
  reviews.getById(req.params.reviewId)
    .then((review) => {
      if (review.user_id === req.session.user.id) {
        reviews.deleteById(req.params.reviewId)
      } else (console.error('Error deleting review'))
    })
})

module.exports = router
