import React from "react"
import { connect } from "react-redux"
import NotifyActions from "../../actions/shared/notification"
import RegisterUserPresenter from "../../components/register/RegisterUser"
import { updateParams, register } from "../../actions/register"

class RegisterUser extends React.Component {
  render() {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      isSubmitting,
    } = this.props.registerState
    const { handleOnChange, handleOnSubmit } = this

    return (
      <RegisterUserPresenter
        name={name}
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        isSubmitting={isSubmitting}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    )
  }

  handleOnChange = (event, key) => {
    this.props.updateParams(key, event.target.value)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { register, history, notifySuccess, notifyShow } = this.props
    const {
      name,
      email,
      password,
      passwordConfirmation,
    } = this.props.registerState

    register({
      name,
      email,
      password,
      passwordConfirmation,
      successCb: () => {
        notifySuccess("ユーザー登録を行いました")
        history.replace("/mypage")
      },
      errorCb: error => {
        notifyShow({
          level: NotifyActions.levels.error,
          title: "ユーザー登録出来ませんでした",
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
    registerState: state.register,
  }
}

export default connect(
  mapStateToProps,
  { ...NotifyActions, updateParams, register }
)(RegisterUser)
