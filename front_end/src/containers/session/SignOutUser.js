import React from "react"
import { connect } from "react-redux"
import { signOutUser } from "../../config/redux-token-auth"

class SignOutUser extends React.Component {
  componentDidMount() {
    const { signOutUser, isSignedIn } = this.props
    if (!isSignedIn) return

    signOutUser()
      .then(res => {
        const { history } = this.props
        history.replace("/about")
      })
      .catch(error => {
        console.log("failure signOutUser", error.response)
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
  { signOutUser }
)(SignOutUser)