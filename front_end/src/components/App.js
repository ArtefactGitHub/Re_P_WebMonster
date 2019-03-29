import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "../stylesheets/App.scss"
import Header from "./header"
import About from "../components/About"
import RegisterUser from "../components/RegisterUser"
import LoginUser from "../components/LoginUser"
import LogoutUser from "../components/LogoutUser"
import MonsterList from "../containers/MonsterList"
import CreateMonster from "../containers/CreateMonster"
import generateRequireSignInWrapper from "../containers/redux-token-auth/generateRequireSignInWrapper"

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/signin",
})

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={MonsterList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signUp" component={RegisterUser} />
          <Route exact path="/signIn" component={LoginUser} />
          <Route exact path="/signOut" component={requireSignIn(LogoutUser)} />
          <Route
            exact
            path="/monster"
            component={requireSignIn(CreateMonster)}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
