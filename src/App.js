import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.js'
import './styles/global.css'
import useFetch from './hooks/fetchData'

const App = () => {
  const { loading, error, data } = useFetch(
    'http://localhost:1337/api/landing-page'
  )
  if (loading) return <p>Loading...</p>
  if (error) return console.log('ERROR:', error)
  console.log('Data from App.js:', data.data)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
