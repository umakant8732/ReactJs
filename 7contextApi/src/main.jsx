import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CountContextprovider } from './context/CountContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountContextprovider>
      <App />
    </CountContextprovider>
  </React.StrictMode>,
)
