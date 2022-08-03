import e from '../../dbschema/edgeql-js'

const EDGEDB_SERVER_URL = 'http://localhost:3001'

const runQuery = async (query: any) => {
  const response = await fetch(EDGEDB_SERVER_URL + '/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query.toEdgeQL() }),
  })
  return await response.json()
}

const getUsers = async (userIds: string[]) => {
  const query = e.select(e.Person, (person) => ({
    id: true,
    full_name: true,
    filter: e.op(person.firebase_uid, 'in', e.set(...userIds)),
  }))
  const response = await runQuery(query)
  return response
}

export const getEvent = async (eventId: string): Promise<Event>  => {
  const query = e.select(e.Event, (event) => ({
    id: true,
    title: true,
    guests: true,
    filter: e.op(event.id, '=', e.uuid(eventId)),
  }))
  const response = await runQuery(query)
  return response
}

const App = () => {
  return (
    <div className="App">
      <button onClick={() => getUsers([])}>Get users</button>
    </div>
  )
}

export default App
