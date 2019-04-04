import { signInUser } from "../../config/redux-token-auth"
import { signOutUser } from "../../config/redux-token-auth"

const signInUpdateParams = (key, value) => {
  return {
    type: "SIGNIN_UPDATE_PARAMS",
    payload: { [key]: value },
  }
}
const signInSuccess = () => {
  return {
    type: "SIGNIN_SUCCESS",
  }
}
const signInFailure = response => {
  return {
    type: "SIGNIN_FAILURE",
  }
}
const signIn = ({ email, password, successCb, errorCb }) => {
  return dispatch => {
    signInUser({ email, password })(dispatch)
      .then(res => {
        dispatch(signInSuccess())
        successCb()
      })
      .catch(error => {
        dispatch(signInFailure())
        errorCb(error)
      })
  }
}

const signOut = ({ successCb, errorCb }) => {
  return dispatch => {
    signOutUser()(dispatch)
      .then(res => {
        successCb()
      })
      .catch(error => {
        errorCb(error)
      })
  }
}

export { signInUpdateParams, signIn, signInSuccess, signInFailure, signOut }
