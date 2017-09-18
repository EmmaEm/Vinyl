const db = require('../config/db.js').db

function getAlbums() {
  return db.query('SELECT * FROM albums')
}

function getAlbumsByID(albumID) {
  return db.query('SELECT * FROM albums WHERE id = $1', [albumID])
}

module.exports = {
  getAlbums,
  getAlbumsByID,
}
