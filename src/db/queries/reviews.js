const db = require('../../config/db.js').db

const getThreeReviews = () => {
  return db.many(`
    SELECT reviews.id, content, user_id, album_id, date_created, name, title, artist FROM reviews
      JOIN users
        ON reviews.user_id = users.id
      JOIN albums
        ON reviews.album_id = albums.id
      ORDER BY date_created DESC
      LIMIT 3;
    `)
}

module.exports = {
  getThreeReviews,
}
