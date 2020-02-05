import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isOpen, changeIsOpen] = useState<boolean>(false)

  return (
    <>
      <button>
        <Link to="/add-tutorial">Add new tutorial</Link>
      </button>

      <button className="test-button" onClick={() => changeIsOpen(!isOpen)}>
        {isOpen ? 'Hide current year' : 'Show current year'}
      </button>

      {isOpen && <h3>{new Date().getFullYear()}</h3>}
    </>
  )
}

export default Home
