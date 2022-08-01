import express from 'express'
import authMiddleware from './middleware/auth'

const app = express()
const PORT = 3001

app.use(authMiddleware)

app.get('/', (req, res) => {
  const user = req.user
  res.send(`Hello ${user?.uid}`)
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})
