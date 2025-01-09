import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import useFetch from './hooks/fetchData'

function App() {
  const { loading, error, data } = useFetch(
    'http://localhost:1337/api/landing-page'
  )
  if (loading) return <p>Loading...</p>
  if (error) return console.log('ERROR:', error)
  console.log('Data:', data.data)

  return <Home />
}

export default App
