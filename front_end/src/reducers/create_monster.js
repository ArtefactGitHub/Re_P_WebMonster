const initial_state = {
  name: "",
  description: "",
  hp: 10,
  wp: 10,
  attack: 10,
  defense: 10,
  speed: 10,
  intelligence: 10,
}

const createMonsterReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "CREATE_MONSTER":
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

export default createMonsterReducer
