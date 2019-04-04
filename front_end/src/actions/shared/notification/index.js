import Notificatios from "react-notification-system-redux"

const NotifyActions = {
  notifyShow: ({ level = this.levels.success, title = "", message = "" }) => {
    return Notificatios.show({ title, message }, level)
  },

  notifySuccess: title => {
    return Notificatios.success({ title })
  },
  notifyError: title => {
    return Notificatios.error({ title })
  },
  notifyWarning: title => {
    return Notificatios.warning({ title })
  },
  notifyInfo: title => {
    return Notificatios.info({ title })
  },
  notifyRemoveAll: () => {
    return Notificatios.removeAll()
  },

  levels: {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
  },
}

export default NotifyActions
