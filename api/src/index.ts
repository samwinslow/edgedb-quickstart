import express from 'express'

const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send('OK!')
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})
