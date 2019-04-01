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
    const { monster, isSubmitting } = this.props
    return (
      <div>
        <CreateMonsterPresenter
          params={monster}
          isSubmitting={isSubmitting}
          range_default_params={range_default_params}
          handleOnChange={this.handleOnChange}
          handleOnChangeParams={this.handleOnChangeParams}
          handleOnChangeImage={this.handleOnChangeImage}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }

  handleOnChangeImage = event => {
    this.props.updateParams("image", event.target.files[0])
  }

  handleOnChange = (event, key) => {
    this.props.updateParams(key, event.target.value)
  }

  handleOnChangeParams = (event, key) => {
    this.props.updateParams(key, event.target.value)
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const formData = new FormData()
    Object.entries(this.props.monster).map(([key, value]) =>
      formData.append([key], value)
    )
    this.props.createMonster(formData)
  }
}

const mapStateToProps = state => {
  return {
    monster: state.create_monster,
    isSubmitting: state.createMonsterIsSubmitting,
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
