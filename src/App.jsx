import React from 'react'

import './App.css'

import Content from './layout/content'
import Sidebar from './layout/sidebar'

const App = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
