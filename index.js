const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World, and Frank too!</h1><br/>')
  res.send('<h1>and now pushing to Render</h1><br/>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})