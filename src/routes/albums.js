const router = require('express').Router()
const albumQueries = require('../db/queries/albums')

router.get('/albums/:albumID', (req, res) => {
  const albumId = req.params.albumID

  albumQueries.getById(albumId)
    .then((albums) => {
      const album = albums[0]
      res.render('albums/album', {album})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
