const initial_state = []

const monstersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "LOAD_MONSTERS":
      return action.payload.monsters

    default:
      return state
  }
}

export default monstersReducer
