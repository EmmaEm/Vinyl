const db = require('../../config/db.js').db

function getAll() {
  return db.query('SELECT * FROM albums')
}

function getById(albumId) {
  return db.query('SELECT * FROM albums WHERE id = $1', [albumId])
}

module.exports = {
  getAll,
  getById,
}
