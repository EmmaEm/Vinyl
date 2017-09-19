const router = require('express').Router()
const albums = require('../db/queries/albums')

// NOTE: Everything in this file is only accessible when user is logged in.

router.get('/albums/:albumId/reviews/new', (req, res) => {
  albums.getById(req.params.albumId)
    .then((album) => {
      res.render('reviews/new-review', {album})
    })
})

module.exports = router
