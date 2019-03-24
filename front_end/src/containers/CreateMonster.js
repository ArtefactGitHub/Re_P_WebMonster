import React from "react"
import { connect } from "react-redux"

import CreateMonsterPresenter from "../components/CreateMonster"

class CreateMonster extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
    }
  }
  render() {
    return (
      <div>
        <CreateMonsterPresenter
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }

  handleOnChange = (event, key) => {
    console.log([key])
    console.log(event.target.value)
    this.setState({ [key]: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log(this.state)
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
