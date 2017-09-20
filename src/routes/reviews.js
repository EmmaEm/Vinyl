const router = require('express').Router()
const albums = require('../db/queries/albums')
const reviews = require('../db/queries/reviews')

// NOTE: Everything in this file is only accessible when user is logged in.

router.get('/albums/:albumId/reviews/new', (req, res) => {
  albums.getById(req.params.albumId)
    .then((album) => {
      res.render('reviews/new-review', {album})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

router.post('/albums/:albumId/reviews/new', (req, res) => {
  const reviewContent = req.body.content
  const userId = res.locals.userId
  const albumId = req.params.albumId
  const starRating = req.body.star_rating
  reviews.create(reviewContent, userId, albumId, starRating)
    .then(res.redirect(`/albums/${albumId}`))
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

router.delete('/deletereview/:reviewId', (req, res) => {
  reviews.getById(req.params.reviewId)
    .then((review) => {
      if (review.user_id === req.session.user.id) {
        reviews.deleteById(req.params.reviewId)
          .catch((error) => {
            res.status(500).render('error', {error})
          })
      } else (console.error('Error deleting review'))
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
