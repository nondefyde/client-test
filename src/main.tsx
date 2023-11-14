import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Socket from './components/socket/Socket.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Socket />
  </React.StrictMode>,
)
