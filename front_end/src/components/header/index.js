import React from "react"
import { connect } from "react-redux"
import BeforeLoginHeader from "./BeforeLoginHeader"
import AfterLoginHeader from "./AfterLoginHeader"

class Header extends React.Component {
  render() {
    const { isSignedIn } = this.props
    const Component = isSignedIn ? AfterLoginHeader : BeforeLoginHeader
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
