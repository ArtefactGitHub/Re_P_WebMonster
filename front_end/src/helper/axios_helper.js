import axios from "axios"
import { authHeaderKeys } from "../config/redux-token-auth"

// see: https://github.com/kylecorbelli/redux-token-auth/blob/master/src/actions.ts#L239-L243
const getVerificationParams = () => {
  const result = {}
  authHeaderKeys.forEach(key => {
    if (localStorage.getItem(key)) result[key] = localStorage.getItem(key)
  })

  return result
}

export default (() => {
  const result = axios.create()
  const verificationParams = getVerificationParams()
  result.interceptors.request.use(
    request => {
      console.log("Starting Request: ", request)

      // request.headers.Authorization = `Bearer ${token}`
      request.headers = { ...verificationParams }
      return request
    },
    function(error) {
      console.log("Request Error: ", error.response)
      return Promise.reject(error)
    }
  )

  result.interceptors.response.use(
    response => {
      console.log("Response: ", response)
      return response
    },
    function(error) {
      console.log("Response Error: ", error.response)
      return Promise.reject(error)
    }
  )

  return result
})()
