class ApplicationSettings {
  static CLIENT_URL = process.env.REACT_APP_FRONTEND_URL
  static HOST_URL = process.env.REACT_APP_BACKEND_URL
  static API_URL = process.env.REACT_APP_BACKEND_API_URL
  static AUTH_URL = process.env.REACT_APP_BACKEND_AUTH_URL

  static ImageUrl = image => {
    if (image == null || image.thumb == null) return ""
    if (process.env.NODE_ENV === "production") return `${image.thumb.url}`
    else return `${ApplicationSettings.HOST_URL}${image.thumb.url}`
  }

  static PublicImageUrl = imagePath => {
    if (imagePath == null) return ""
    return `/images/${imagePath}`
  }

  static ImageUrlLocal = imageUrl =>
    ApplicationSettings.createObjectURL(imageUrl)

  static createObjectURL =
    (window.URL || window.webkitURL).createObjectURL || window.createObjectURL
}

export default ApplicationSettings
