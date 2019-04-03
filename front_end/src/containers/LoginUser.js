import React from "react"
import { connect } from "react-redux"
import NotifyActions from "../actions/shared/notification"
import LoginUserPresenter from "../components/LoginUser"
import { updateParams, signIn } from "../actions/session"

class LoginUser extends React.Component {
  render() {
    const { email, password, isSubmitting } = this.props.sessions

    return (
      <div className="login-user">
        <LoginUserPresenter
          email={email}
          password={password}
          isSubmitting={isSubmitting}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }

  handleOnChange = (event, key) => {
    this.props.updateParams(key, event.target.value)
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const { history, signIn, notifySuccess, notifyShow, sessions } = this.props
    const { email, password } = sessions
    signIn({
      email,
      password,
      successCb: () => {
        notifySuccess("ログインしました")
        history.replace("/mypage")
      },
      errorCb: error => {
        notifyShow({
          level: NotifyActions.levels.error,
          title: "ログイン出来ませんでした",
          message: error.response.data.errors[0],
        })
      },
    })
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notifications,
    sessions: state.sessions,
  }
}

export default connect(
  mapStateToProps,
  { ...NotifyActions, updateParams, signIn }
)(LoginUser)
