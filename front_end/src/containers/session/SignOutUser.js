import React from "react"
import { connect } from "react-redux"
import NotifyActions from "../../actions/shared/notification"
import { signOut } from "../../actions/session"

class SignOutUser extends React.Component {
  componentDidMount() {
    if (!this.props.isSignedIn) return

    const { history, signOut, notifySuccess, notifyShow } = this.props
    signOut({
      successCb: () => {
        notifySuccess("ログアウトしました")
        history.replace("/about")
      },
      errorCb: error => {
        notifyShow({
          level: NotifyActions.levels.error,
          title: "ログアウト出来ませんでした",
          message: error.response.data.errors[0],
        })
      },
    })
  }

  render() {
    return <div />
  }
}

const mapStateToProps = (state: ReduxState) => ({
  isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
})

export default connect(
  mapStateToProps,
  { ...NotifyActions, signOut }
)(SignOutUser)
