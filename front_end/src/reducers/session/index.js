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
        ...action.payload,
      }
    case "SIGNIN_FAILURE":
      return {
        ...state,
      }
    case "UPDATE_PARAMS":
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default signInReducer
