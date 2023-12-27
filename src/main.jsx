import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/assets/css/global.css'

import App from './App.jsx'
import { SidebarProvide } from './context/SidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarProvide>
      <App />
    </SidebarProvide>
  </React.StrictMode>,
)
