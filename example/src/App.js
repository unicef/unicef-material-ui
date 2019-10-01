import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css'
import { Header } from './components'
import Home from './Pages/Home'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}
