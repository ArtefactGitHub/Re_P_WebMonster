import React from "react"
import { connect } from "react-redux"
import CreateMonsterPresenter from "../components/CreateMonster"
import { updateParams, createMonster } from "../actions/CreateMonster"

const range_default_params = {
  min: 5,
  max: 20,
}

class CreateMonster extends React.Component {
  render() {
    const { monster } = this.props
    return (
      <div>
        <CreateMonsterPresenter
          params={monster}
          range_default_params={range_default_params}
          handleOnChange={this.handleOnChange}
          handleOnChangeParams={this.handleOnChangeParams}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }

  handleOnChange = (event, key) => {
    this.props.updateParams(key, event.target.value)
  }

  handleOnChangeParams = (event, key) => {
    this.props.updateParams(key, event.target.value)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createMonster(this.props.monster)
  }
}

const mapStateToProps = state => {
  return {
    monster: state.create_monster,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateParams: (key, value) => dispatch(updateParams(key, value)),
    createMonster: monster => dispatch(createMonster(monster)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMonster)
