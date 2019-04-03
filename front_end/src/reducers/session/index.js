const initial_state = {
  email: "",
  password: "",
  isSubmitting: false,
}

const signInReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return {
        ...initial_state,
      }
    case "SIGNIN_FAILURE":
      return {
        ...state,
      }
    case "SIGNIN_UPDATE_PARAMS":
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default signInReducer
