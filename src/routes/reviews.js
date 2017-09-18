const router = require('express').Router()
// const db = require('../db')

router.get('/new-review/:albumId', (req, res) => {
  res.render('reviews/new-review')
})

module.exports = router
