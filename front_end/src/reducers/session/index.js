const initial_state = {
  email: "",
  password: "",
  isSubmitting: false,

  status: "",
  response: null,
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
        ...action.payload,
      }
    case "SIGNIN_END":
      return initial_state
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
