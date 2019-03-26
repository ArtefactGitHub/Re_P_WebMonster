class ApplicationSettings {
  static HOST_URL = process.env.REACT_APP_BACKEND_URL
  static API_URL = process.env.REACT_APP_BACKEND_API_URL

  static ImageUrl = imageUrl => `${ApplicationSettings.HOST_URL}${imageUrl}`
  static ImageUrlLocal = imageUrl =>
    ApplicationSettings.createObjectURL(imageUrl)

  static createObjectURL =
    (window.URL || window.webkitURL).createObjectURL || window.createObjectURL
}

export default ApplicationSettings
