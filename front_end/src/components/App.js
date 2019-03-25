import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "../stylesheets/App.scss"
import About from "../components/About"
import MonsterList from "../containers/MonsterList"
import CreateMonster from "../containers/CreateMonster"

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <ul>
            <li>
              <Link to="/">モンスター一覧</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/monster">モンスター作成</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/" component={MonsterList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/monster" component={CreateMonster} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
