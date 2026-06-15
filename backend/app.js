const express = require('express')
const cors = require('cors')
require('dotenv').config()

const scoresRouter = require('./routes/score')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/scores', scoresRouter)

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`)
})