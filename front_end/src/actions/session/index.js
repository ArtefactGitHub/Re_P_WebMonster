import { signInUser } from "../../config/redux-token-auth"

const updateParams = (key, value) => {
  return {
    type: "UPDATE_PARAMS",
    payload: { [key]: value },
  }
}
const signInSuccess = () => {
  return {
    type: "SIGNIN_SUCCESS",
    payload: { status: "success" },
  }
}
const signInFailure = response => {
  return {
    type: "SIGNIN_FAILURE",
    payload: { status: "failure", response: response },
  }
}
const signInEnd = () => {
  return {
    type: "SIGNIN_END",
  }
}

const signIn = ({ email, password }) => {
  return dispatch => {
    signInUser({ email, password })(dispatch)
      .then(res => {
        dispatch(signInSuccess())
      })
      .catch(error => {
        dispatch(signInFailure(error.response))
      })
  }
}

export { updateParams, signIn, signInSuccess, signInFailure, signInEnd }
