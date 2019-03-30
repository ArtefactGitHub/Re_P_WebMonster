import * as React from "react"
import { connect } from "react-redux"

const generateRequireSignInWrapper = ({ redirectPathIfNotSignedIn }) => {
  const requireSignInWrapper = PageComponent => {
    class GatedPage extends React.Component {
      componentWillMount() {
        const { history, isSignedIn } = this.props
        if (!isSignedIn) {
          history.replace(redirectPathIfNotSignedIn)
        }
      }

      render() {
        return <PageComponent {...this.props} />
      }
    }

    const mapStateToProps = (state: ReduxState) => ({
      isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
    })

    return connect(mapStateToProps)(GatedPage)
  }

  return requireSignInWrapper
}

export default generateRequireSignInWrapper
