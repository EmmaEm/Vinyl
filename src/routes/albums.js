const router = require('express').Router()
const albums = require('../db/queries/albums')

router.get('/albums/:albumId', (req, res) => {
  albums.getReviews(req.params.albumId)
    .then((reviews) => {
      res.render('albums/album', {reviews})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
