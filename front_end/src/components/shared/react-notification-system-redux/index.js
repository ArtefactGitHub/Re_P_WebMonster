import React from "react"
import { connect } from "react-redux"
import Notifications from "react-notification-system-redux"

// see: https://github.com/gor181/react-notification-system-redux#usage
class Notification extends React.Component {
  render() {
    const { notifications } = this.props
    const style = {
      NotificationItem: {
        // Override the notification item
        DefaultStyle: {
          // Applied to every notification, regardless of the notification level
          whiteSpace: "pre-wrap",
        },
      },
    }
    return <Notifications notifications={notifications} style={style} />
  }
}

export default connect(state => ({ notifications: state.notifications }))(
  Notification
)
