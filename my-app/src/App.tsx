import e from '@dbschema/local'

const EDGEDB_SERVER_URL = 'http://localhost:3001'

const runQuery = async (query: string) => {
  const response = await fetch(EDGEDB_SERVER_URL + '/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  return await response.json()
}

const getUsers = async (userIds: string[]) => {
  const query = e.select(e.Person, (person) => ({
    full_name: true
  })).toEdgeQL()
  const response = await runQuery(query)
  console.log({ response })
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
