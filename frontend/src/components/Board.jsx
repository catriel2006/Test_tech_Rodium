import { useState, useEffect } from 'react'
import Card from './Card'

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🦊', '🐻', '🐼', '🐸']

function shuffle(array) {
  return [...array, ...array]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({ id: index, emoji, isFlipped: false, isMatched: false }))
}

function Board({ onGameOver }) {
  const [cards, setCards] = useState(shuffle(EMOJIS))
  const [selected, setSelected] = useState([])
  const [coups, setCoups] = useState(0)
  const [locked, setLocked] = useState(false)

  const handleClick = (card) => {
    if (locked || card.isFlipped || card.isMatched) return
    if (selected.length === 1 && selected[0].id === card.id) return

    const newCards = cards.map(c =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    )
    setCards(newCards)

    const newSelected = [...selected, card]
    setSelected(newSelected)

    if (newSelected.length === 2) {
      setCoups(c => c + 1)
      setLocked(true)

      if (newSelected[0].emoji === newSelected[1].emoji) {
        setCards(prev => prev.map(c =>
          c.emoji === newSelected[0].emoji ? { ...c, isMatched: true } : c
        ))
        setSelected([])
        setLocked(false)
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === newSelected[0].id || c.id === newSelected[1].id
              ? { ...c, isFlipped: false } : c
          ))
          setSelected([])
          setLocked(false)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (cards.every(c => c.isMatched)) {
      onGameOver(coups)
    }
  }, [cards])

  return (
    <div>
      <p className="board-header">Coups : {coups}</p>
      <div className="board-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            emoji={card.emoji}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleClick(card)}
          />
        ))}
      </div>
    </div>
  )
}

export default Board
