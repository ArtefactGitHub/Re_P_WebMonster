import axios from "axios"

const getVerificationParams = () => {
  if (localStorage.getItem("access-token")) {
    const required = {
      "access-token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    }
    const optional = {
      "token-type": localStorage.getItem("token-type"),
      expiry: localStorage.getItem("expiry"),
    }
    return {
      ...required,
      ...optional,
    }
  }

  return {}
}

export default (() => {
  const result = axios.create()
  const token = getVerificationParams()
  result.interceptors.request.use(
    request => {
      console.log("Starting Request: ", request)

      // request.headers.Authorization = `Bearer ${token}`
      request.headers = { ...token }
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
