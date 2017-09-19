const db = require('../../config/db.js').db

const getAll = () => {
  return db.many('SELECT * FROM albums')
}

const getById = (albumId) => {
  return db.one(`
    SELECT * FROM albums
      WHERE id = $1
    `, [albumId])
}

const getReviews = (albumId) => {
  return db.many(`
    SELECT reviews.id, content, user_id, album_id, date_created, name, title, artist FROM reviews
    JOIN users
      ON reviews.user_id = users.id
    RIGHT OUTER JOIN albums
      ON reviews.album_id = albums.id
    WHERE albums.id = $1
    ORDER BY reviews.date_created DESC
    `, [albumId])
    .catch((error) => {
      console.error('\nError in queries.getReviewsByAlbumId\n')
      throw error
    })
}

module.exports = {
  getAll,
  getById,
  getReviews,
}
