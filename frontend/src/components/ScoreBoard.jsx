import { useState, useEffect } from 'react'

function ScoreBoard() {
  const [scores, setScores] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/scores')
      .then(res => res.json())
      .then(data => setScores(data))
      .catch(() => {})
  }, [])

  return (
    <div className="scoreboard">
      <h3>🏆 Meilleurs scores</h3>
      {scores.length === 0 ? (
        <p>Aucun score enregistré</p>
      ) : (
        <ol>
          {scores.map((score, index) => (
            <li key={index}>
              {score.pseudo} — {score.coups} coups
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default ScoreBoard
