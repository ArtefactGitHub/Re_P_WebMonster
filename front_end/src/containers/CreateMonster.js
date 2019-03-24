import React from "react"
import { connect } from "react-redux"

import CreateMonsterPresenter from "../components/CreateMonster"

const initial_params = {
  たいりょく: 10,
  わざ: 10,
  こうげき: 10,
  ぼうぎょ: 10,
  すばやさ: 10,
  かしこさ: 10,
}
const range_default_params = {
  min: 5,
  max: 20,
}

class CreateMonster extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      params: initial_params,
    }
  }

  render() {
    return (
      <div>
        <CreateMonsterPresenter
          params={this.state.params}
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
      params: {
        ...this.state.params,
        [key]: event.target.value,
      },
    })
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
