import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import NotifyActions from "../actions/shared/notification"
import CreateMonsterPresenter from "../components/CreateMonster"
import {
  createMonsterUpdateParams,
  createMonster,
} from "../actions/CreateMonster"

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
    this.props.createMonsterUpdateParams("image", event.target.files[0])
  }

  handleOnChange = (event, key) => {
    this.props.createMonsterUpdateParams(key, event.target.value)
  }

  handleOnChangeParams = (event, key) => {
    this.props.createMonsterUpdateParams(key, event.target.value)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { createMonster, notifySuccess, notifyShow, monster } = this.props

    const formData = new FormData()
    Object.entries(monster).map(([key, value]) => formData.append([key], value))
    createMonster({
      monster: formData,
      successCb: () => {
        notifySuccess("モンスターを作成しました")
      },
      errorCb: error => {
        notifyShow({
          level: NotifyActions.levels.error,
          title: "モンスターを作成出来ませんでした",
          message:
            "full_messages" in error.response.data.errors
              ? error.response.data.errors.full_messages.join("\n")
              : "",
        })
      },
    })
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
    createMonsterUpdateParams: (key, value) =>
      dispatch(createMonsterUpdateParams(key, value)),
    createMonster: monster => dispatch(createMonster(monster)),
    ...bindActionCreators(NotifyActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMonster)
