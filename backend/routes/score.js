const express = require('express')
const router = express.Router()
const { getTopScores, saveScore } = require('../models/Score')

router.get('/', async (req, res) => {
  try {
    const scores = await getTopScores()
    res.json(scores)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des scores' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { pseudo, coups } = req.body
    if (!pseudo || !coups) {
      return res.status(400).json({ error: 'pseudo et coups sont requis' })
    }
    const score = await saveScore(pseudo, coups)
    res.status(201).json({ success: true, message: 'Score sauvegardé', score })
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la sauvegarde du score' })
  }
})

module.exports = router