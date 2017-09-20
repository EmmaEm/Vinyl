const router = require('express').Router()
const albums = require('../db/queries/albums')
const reviews = require('../db/queries/reviews')

const getThreeReviews = (req, res, next) => {
  reviews.getThreeReviews()
    .then((threeReviews) => {
      req.reviews = threeReviews
      next()
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
}

const getAllAlbums = (req, res, next) => {
  albums.getAll()
    .then((allAlbums) => {
      req.albums = allAlbums
      next()
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
}

const renderHome = (req, res) => {
  res.render('home', {reviews: req.reviews, albums: req.albums})
}


router.get('/', getThreeReviews, getAllAlbums, renderHome)

module.exports = router
