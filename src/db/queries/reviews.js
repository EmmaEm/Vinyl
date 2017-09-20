const db = require('../../config/db.js').db

const getById = (reviewId) => {
  return db.one('SELECT * FROM reviews WHERE id = $1', [reviewId])
    .catch((error) => {
      console.error('\nError in reviews/getById\n')
      throw error
    })
}

const getThreeReviews = () => {
  return db.many(`
    SELECT reviews.id, content, user_id, album_id, date_created, name, title, artist, star_rating
    FROM reviews
      JOIN users
        ON reviews.user_id = users.id
      JOIN albums
        ON reviews.album_id = albums.id
      ORDER BY date_created DESC
      LIMIT 3;
    `)
}

const create = (content, userId, albumId, starRating) => {
  return db.none(`
    INSERT INTO reviews
      (content, user_id, album_id, star_rating)
    VALUES
      ($1, $2, $3, $4)
    `, [content, userId, albumId, starRating])
    .catch((error) => {
      console.error('\nError in queries/reviews.new\n')
      throw error
    })
}

const deleteById = (reviewId) => {
  return db.none(`
    DELETE FROM reviews
      WHERE id = $1
    `, [reviewId])
    .catch((error) => {
      console.error('\nError in queries/review.deleteById\n')
      throw error
    })
}

module.exports = {
  getById,
  getThreeReviews,
  create,
  deleteById,
}
