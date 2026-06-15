import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import GameOver from './components/GameOver'
import ScoreBoard from './components/ScoreBoard'

function App() {
  const [gameOver, setGameOver] = useState(false)
  const [coups, setCoups] = useState(0)
  const [key, setKey] = useState(0)
  const [scoreBoardKey, setScoreBoardKey] = useState(0)

  const handleGameOver = (totalCoups) => {
    setCoups(totalCoups)
    setGameOver(true)
  }

  const handleRestart = () => {
    setGameOver(false)
    setCoups(0)
    setKey(k => k + 1)
    window.scrollTo(0, 0)
  }

  const handleScoreSaved = () => {
    setScoreBoardKey(k => k + 1)
  }

  return (
    <div className="game-container">
      <h1>🃏 Jeu de Memory</h1>
      <div key={key}>
        {gameOver ? (
          <GameOver coups={coups} onRestart={handleRestart} onScoreSaved={handleScoreSaved} />
        ) : (
          <Board onGameOver={handleGameOver} />
        )}
      </div>
      <ScoreBoard key={scoreBoardKey} />
    </div>
  )
}

export default App
