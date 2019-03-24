import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "../stylesheets/App.scss"
import MonsterList from "../containers/MonsterList"
import About from "../components/About"

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">モンスター一覧</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={MonsterList} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
