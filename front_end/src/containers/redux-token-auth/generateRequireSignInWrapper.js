import * as React from "react"
import { connect } from "react-redux"

const generateRequireSignInWrapper = ({ redirectPathIfNotSignedIn }) => {
  const requireSignInWrapper = PageComponent => {
    class GatedPage extends React.Component {
      componentWillReceiveProps(nextProps: WrapperProps) {
        const { history, isSignedIn, hasVerificationBeenAttempted } = nextProps
        if (hasVerificationBeenAttempted && !isSignedIn) {
          history.replace(redirectPathIfNotSignedIn)
        }
      }

      render() {
        const { hasVerificationBeenAttempted, isSignedIn } = this.props
        return hasVerificationBeenAttempted && isSignedIn ? (
          <PageComponent {...this.props} />
        ) : (
          <div />
        )
      }
    }

    const mapStateToProps = (state: ReduxState) => ({
      isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
      hasVerificationBeenAttempted:
        state.reduxTokenAuth.currentUser.hasVerificationBeenAttempted,
    })

    return connect(mapStateToProps)(GatedPage)
  }

  return requireSignInWrapper
}

export default generateRequireSignInWrapper
