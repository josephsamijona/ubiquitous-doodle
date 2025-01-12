import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Polyfills et optimisations pour la compatibilité navigateur
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)