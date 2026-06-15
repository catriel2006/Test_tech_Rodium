const pool = require('../config/db')

const getTopScores = async () => {
  const result = await pool.query(
    'SELECT pseudo, coups, date FROM scores ORDER BY coups ASC LIMIT 5'
  )
  return result.rows
}

const saveScore = async (pseudo, coups) => {
  const result = await pool.query(
    'INSERT INTO scores (pseudo, coups) VALUES ($1, $2) RETURNING *',
    [pseudo, coups]
  )
  return result.rows[0]
}

module.exports = { getTopScores, saveScore }