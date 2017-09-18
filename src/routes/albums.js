const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getAlbums()
    .then((albums) => {
      res.render('index', {albums})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

router.get('/albums/:albumID', (req, res) => {
  const albumID = req.params.albumID

  db.getAlbumsByID(albumID)
    .then((albums) => {
      const album = albums[0]
      res.render('album', {album})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
