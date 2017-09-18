const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getAlbums()
    .then((albums) => {
      res.render('home', {albums})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
