import express from 'express'
import authMiddleware from './middleware/auth'
import asyncMiddleware from './middleware/async'
import e from '../../dbschema/edgeql-js'
import { createClient } from './db'

const app = express()
const PORT = 3001

app.use(authMiddleware)
app.use(express.json())

app.get('/', (req, res) => {
  const { user } = req
  res.send(`Hello ${user?.uid}`)
})

// Can run a query and expose a traditional REST interface
// app.get('/users', asyncMiddleware(async (req, res) => {
//   const query = e.select(e.Person, (person) => ({
//     full_name: true,
//     phone_number: true,
//   }))
//   const result = await query.run(client.withGlobals({ current_uid: req.user?.uid }))
//   res.send(result)
// }))


// Better yet, use a DB abstraction layer
app.get('/users', asyncMiddleware(async (req, res) => {
  const client = createClient({ current_uid: req.user?.uid })
  const query = e.select(e.Person, (person) => ({
    full_name: true,
    phone_number: true,
  }))
  const result = await query.run(client)
  res.send(result)
}))


// ... Or proxy the client and accept an EdgeQL string
// Example request body:
// {
//   "query": "select Person { full_name };"
// }
app.post('/query', asyncMiddleware(async (req, res) => {
  const query: string = req.body.query
  const client = createClient({ current_uid: req.user?.uid })
  const result = await client.query(query)
  res.send(result)
}))

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})
