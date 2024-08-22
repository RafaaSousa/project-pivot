const express = require('express')
const router = express.Router()

// middleware específico para este roteador
router.use((req, res, next) => {
  console.log('Horário: ', Date.now())
  next()
})
// define a rota da homepage
router.get('/', (req, res) => {
  res.send('Homepage de bolsas')
})
// define a rota 'ajuda'
router.get('/ajuda', (req, res) => {
  res.send('Ajuda sobre bolsas')
})
module.exports = router