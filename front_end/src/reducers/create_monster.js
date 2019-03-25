import { CREATE_MONSTER_INITIAL_STATE } from "../constants"

const initial_state = CREATE_MONSTER_INITIAL_STATE
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
