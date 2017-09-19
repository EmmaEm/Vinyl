const router = require('express').Router()
const albumQueries = require('../db/queries/albums')

router.get('/', (req, res) => {
  albumQueries.getAll()
    .then((albums) => {
      res.render('home', {albums})
    })
    .catch((error) => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
