import React from "react"
import { connect } from "react-redux"
import BeforeSignInHeader from "./BeforeSignInHeader"
import AfterSignInHeader from "./AfterSignInHeader"

class Header extends React.Component {
  render() {
    const { isSignedIn } = this.props
    const Component = isSignedIn ? AfterSignInHeader : BeforeSignInHeader
    return (
      <div>
        <Component />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
  }
}

export default connect(mapStateToProps)(Header)
