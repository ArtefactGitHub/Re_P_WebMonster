// import axios from "axios"
// Use the same axios instance as redux-token-auth
import { axios } from "redux-token-auth"
import { authHeaderKeys } from "../config/redux-token-auth"

const getStorage = () => {
  return window.localStorage
}

// see: https://github.com/kylecorbelli/redux-token-auth/blob/master/src/actions.ts#L239-L243
const getVerificationParams = () => {
  const result = {}
  const storage = getStorage()

  authHeaderKeys.forEach(key => {
    if (storage.getItem(key)) result[key] = storage.getItem(key)
  })
  return result
}

const saveHeaders = response => {
  if (response && response.headers) {
    const storage = getStorage()
    authHeaderKeys.forEach((key: string) => {
      // not to overwrite with empty parameters
      // see: https://github.com/lynndylanhurley/devise_token_auth/issues/1147#issuecomment-415195924
      if (response.headers[key]) {
        storage.setItem(key, response.headers[key])
        // for redux-token-auth
        axios.defaults.headers.common[key] = response.headers[key]
      }
    })
  }
}

export default (() => {
  const instance = axios

  instance.interceptors.request.use(
    request => {
      const verificationParams = getVerificationParams()
      // request.headers.Authorization = `Bearer ${token}`
      request.headers = { ...verificationParams }

      console.log("Starting Request: ", request)
      return request
    },
    function(error) {
      console.log("Request Error: ", error.response)
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    response => {
      console.log("Response: ", response)
      saveHeaders(response)
      return response
    },
    function(error) {
      console.log("Response Error: ", error.response)
      // for changed access-token
      saveHeaders(error.response)
      return Promise.reject(error)
    }
  )

  return instance
})()
