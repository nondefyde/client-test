import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { StripePayment } from './components/stripe/StripPayment.tsx';
import Socket from './components/socket/Socket.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Socket />
  </React.StrictMode>,
)
