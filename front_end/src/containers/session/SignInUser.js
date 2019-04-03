import React from "react"
import { connect } from "react-redux"
import NotifyActions from "../../actions/shared/notification"
import SignInUserPresenter from "../../components/session/SignInUser"
import { updateParams, signIn } from "../../actions/session"

class SignInUser extends React.Component {
  render() {
    const { email, password, isSubmitting } = this.props.session

    return (
      <div className="signin-user">
        <SignInUserPresenter
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

    const { history, signIn, notifySuccess, notifyShow, session } = this.props
    const { email, password } = session
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
    session: state.session,
  }
}

export default connect(
  mapStateToProps,
  { ...NotifyActions, updateParams, signIn }
)(SignInUser)
