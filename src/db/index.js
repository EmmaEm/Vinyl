// const pg = require('pg')
const pgp = require('pg-promise')()

const dbName = 'vinyl'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
// const client = new pg.Client(connectionString)
const db = pgp(connectionString)

// client.connect()

function getAlbums() {
  return db.query('SELECT * FROM albums')
}

function getAlbumsByID(albumID) {
  return db.query('SELECT * FROM albums WHERE id = $1', [albumID])
}

// function _query(sql, variables, cb) {
//   console.log('QUERY ->', sql.replace(/[\n\s]+/g, ' '), variables)
//
//   client.query(sql, variables, (error, result) => {
//     if (error) {
//       console.log('QUERY -> !!ERROR!!')
//       console.error(error)
//       cb(error)
//     } else {
//       console.log('QUERY ->', JSON.stringify(result.rows))
//       cb(error, result.rows)
//     }
//   })
// }

module.exports = {
  getAlbums,
  getAlbumsByID,
}
