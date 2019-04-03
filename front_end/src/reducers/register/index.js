const initial_state = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  isSubmitting: false,
}

const registerReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...initial_state,
        ...action.payload,
      }
    case "REGISTER_FAILURE":
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

export default registerReducer
