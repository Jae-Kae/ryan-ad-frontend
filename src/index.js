import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StrapiProvider } from './context/StrapiProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrapiProvider>
    <App />
  </StrapiProvider>
)
