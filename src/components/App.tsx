import './App.css'

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './../pages/Home'
import NewTutorial from './../pages/NewTutorial'

const App: React.FC = () => (
  <BrowserRouter>
    <div className="code-guides-app">
      <header>
        <h1>Code Guides App</h1>
      </header>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-tutorial" component={NewTutorial} />
        </Switch>
      </div>

      <footer>
        <h2>footer {new Date().getFullYear()}</h2>
      </footer>
    </div>
  </BrowserRouter>
)

export default App
