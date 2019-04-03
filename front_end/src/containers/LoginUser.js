import React from "react"
import { connect } from "react-redux"
import NotifyActions from "../actions/shared/notification"
import LoginUserPresenter from "../components/LoginUser"
import { updateParams, signIn, signInEnd } from "../actions/session"

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

    const { email, password } = this.props.sessions
    this.props.signIn({ email, password })
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, notifySuccess, notifyShow, sessions } = this.props
    const { status, response } = sessions
    if (status === prevProps.sessions.status) return

    if (status === "success") {
      notifySuccess("ログインしました")
      history.replace("/mypage")
      signInEnd()
    }
    if (status === "failure") {
      notifyShow({
        level: NotifyActions.levels.error,
        title: "ログイン出来ませんでした",
        message: response.data.errors[0],
      })
      signInEnd()
    }
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
  { ...NotifyActions, updateParams, signIn, signInEnd }
)(LoginUser)
