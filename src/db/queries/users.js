const db = require('../../config/db.js').db

const create = (name, email, password) => {
  return db.one(`
    INSERT INTO
      users (name, email, password)
    VALUES
      ($1, LOWER($2), $3)
    RETURNING *
    `, [name, email, password])
    .catch((error) => {
      console.error('\n Error in users.create query')
      throw error
    })
}

const getByEmail = (email) => {
  return db.one(`
    SELECT * FROM users WHERE LOWER(email) = LOWER($1)
    `, [email])
    .catch((error) => {
      console.error('\nError in users.getByEmail\n')
      throw error
    })
}

const getReviews = (userId) => {
  return db.many(`
    SELECT * FROM reviews
    RIGHT OUTER JOIN users
      ON reviews.user_id = users.user_id
    LEFT OUTER JOIN albums
      ON reviews.album_id = albums.id
    WHERE users.user_id = $1
    ORDER BY review_id DESC
    `, [userId])
    .catch((error) => {
      console.error('\nError in queries.getReviewsByUserId\n')
      throw error
    })
}

module.exports = {
  create,
  getByEmail,
  getReviews,
}
