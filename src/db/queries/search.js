const db = require('../../config/db.js').db

const albumOrArtist = (searchTerm) => {
  const regExSearchTerm = `%${searchTerm}%`
  return db.any(`
    SELECT * FROM albums
      WHERE LOWER(artist) || LOWER(title)
        like LOWER($1);
  `, [regExSearchTerm])
    .catch((error) => {
      console.error('\nError in queries/search.albumOrArtist\n')
      throw error
    })
}

module.exports = {
  albumOrArtist,
}
