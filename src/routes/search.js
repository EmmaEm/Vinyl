const router = require('express').Router()
const search = require('../db/queries/search')

router.post('/search', (req, res) => {
  res.redirect(`/search/${req.body.searchTerm}`)
})

router.get('/search/:searchTerm', (req, res) => {
  search.albumOrArtist(req.params.searchTerm)
    .then((searchResults) => {
      res.render('search', {searchResults})
    })
})

module.exports = router
