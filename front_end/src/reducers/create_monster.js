import { CREATE_MONSTER_INITIAL_STATE } from "../constants"

const initial_state = CREATE_MONSTER_INITIAL_STATE
const createMonsterReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "CREATE_MONSTER":
      return initial_state

    case "CREATE_MONSTER_UPDATE_PARAMS":
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

const createMonsterIsSubmittingReducer = (state = false, action) => {
  switch (action.type) {
    case "SUBMIT_START":
      return true
    case "SUBMIT_END":
      return false

    default:
      return state
  }
}

export { createMonsterReducer, createMonsterIsSubmittingReducer }
