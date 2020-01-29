import React, { useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const [isOpen, changeIsOpen] = useState<boolean>(false)

  return (
    <div className="code-guides-app">
      <h1>Code Guides App</h1>
      <h4>cool application</h4>
      <button onClick={() => changeIsOpen(!isOpen)}>
        {isOpen ? 'Hide current year' : 'Show current year'}
      </button>
      {isOpen && <h2>{new Date().getFullYear()}</h2>}
    </div>
  )
}

export default App
