import express from 'express'
import authMiddleware from './middleware/auth'
import asyncMiddleware from './middleware/async'
import e from '../../dbschema/edgeql-js'
import { client } from './db'

const app = express()
const PORT = 3001

app.use(authMiddleware)

app.get('/', (req, res) => {
  const { user } = req
  res.send(`Hello ${user?.uid}`)
})

app.get('/users', asyncMiddleware(async (req, res) => {
  const { user } = req
  const query = e.select(e.datetime_current())
  const result = await query.run(client)
  res.send(result)
}))

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})
