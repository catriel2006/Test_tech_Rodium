import { useState } from 'react'

function GameOver({ coups, onRestart, onScoreSaved }) {
  const [pseudo, setPseudo] = useState('')
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState(false)

  const saveScore = async () => {
    if (!pseudo.trim()) return
    try {
      await fetch('http://localhost:3000/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pseudo: pseudo.trim(), coups })
      })
      setSaved(true)
      onScoreSaved()
    } catch {
      setError(true)
    }
  }

  return (
    <div className="gameover">
      <h2>Bravo ! 🎉</h2>
      <p>Tu as terminé en {coups} coups.</p>
      {!saved ? (
        <div>
          <input
            type="text"
            placeholder="Ton pseudo"
            value={pseudo}
            onChange={e => setPseudo(e.target.value)}
          />
          <button onClick={saveScore}>Sauvegarder</button>
          {error && <p className="error">Échec de la sauvegarde, réessaie.</p>}
        </div>
      ) : (
        <p>Score sauvegardé ✓</p>
      )}
      <button onClick={onRestart}>Nouvelle partie</button>
    </div>
  )
}

export default GameOver
