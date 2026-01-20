import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <--- This imports Tailwind. If this is missing, no styles will work.
import './features/gtm/styles/gtm-scoped.css' // Import GTM Scoped Theme

import { BrowserRouter } from 'react-router-dom' // Import Router
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)