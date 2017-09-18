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

module.exports = {
  create,
}
