import { registerUser } from "../../config/redux-token-auth"

const updateParams = (key, value) => {
  return {
    type: "UPDATE_PARAMS",
    payload: { [key]: value },
  }
}
const registerSuccess = () => {
  return {
    type: "REGISTER_SUCCESS",
  }
}
const registerFailure = response => {
  return {
    type: "REGISTER_FAILURE",
  }
}

const register = ({
  name,
  email,
  password,
  passwordConfirmation,
  successCb,
  errorCb,
}) => {
  return dispatch => {
    registerUser({ name, email, password, passwordConfirmation })(dispatch)
      .then(res => {
        dispatch(registerSuccess())
        successCb()
      })
      .catch(error => {
        dispatch(registerFailure())
        errorCb(error)
      })
  }
}

export { updateParams, register, registerSuccess, registerFailure }
