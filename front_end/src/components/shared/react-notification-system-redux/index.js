import React from "react"
import { connect } from "react-redux"
import Notifications from "react-notification-system-redux"

// see: https://github.com/gor181/react-notification-system-redux#usage
class Notification extends React.Component {
  render() {
    const { notifications } = this.props
    return <Notifications notifications={notifications} />
  }
}

export default connect(state => ({ notifications: state.notifications }))(
  Notification
)
