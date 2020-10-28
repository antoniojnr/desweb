const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Página inicial')
})

app.get('/oi', (req, res) => {
  const nome = req.query['nome']

  res.send(`Oi, ${nome}`)
})

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`)
})