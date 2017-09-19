const db = require('../../config/db.js').db

function getAll() {
  return db.query('SELECT * FROM albums')
}

function getReviews(albumId) {
  return db.many(`
    SELECT reviews.id, content, user_id, album_id, date_created, name, title, artist FROM reviews
    JOIN users
      ON reviews.user_id = users.id
    RIGHT OUTER JOIN albums
      ON reviews.album_id = albums.id
    WHERE albums.id = $1
    ORDER BY reviews.id DESC
    `, [albumId])
    .catch((error) => {
      console.error('\nError in queries.getReviewsByAlbumId\n')
      throw error
    })
}

module.exports = {
  getAll,
  getReviews,
}