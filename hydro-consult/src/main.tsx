// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ← THIS is critical: pull in your Tailwind build
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
