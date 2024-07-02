import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
