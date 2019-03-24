import React from "react"
import { connect } from "react-redux"
import axios from "axios"
import CreateMonsterPresenter from "../components/CreateMonster"
import Settings from "../config/application"

const initial_params = {
  name: "",
  description: "",
  hp: 10,
  wp: 10,
  attack: 10,
  defense: 10,
  speed: 10,
  intelligence: 10,
}
const range_default_params = {
  min: 5,
  max: 20,
}

class CreateMonster extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initial_params,
    }
  }

  render() {
    return (
      <div>
        <CreateMonsterPresenter
          params={this.state}
          range_default_params={range_default_params}
          handleOnChange={this.handleOnChange}
          handleOnChangeParams={this.handleOnChangeParams}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }

  handleOnChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    })
  }

  handleOnChangeParams = (event, key) => {
    this.setState({
      ...this.state,
      [key]: event.target.value,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    axios
      .post(`${Settings.API_URL}/monsters`, this.state)
      .then(res => {
        // dispatch({ type: "LOAD_TODO", payload: { todos: res.data } })
        console.log("success", res)
        this.setState(initial_params)
      })
      .catch(data => {
        console.log("failure", data)
      })
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMonster)
