import { combineReducers } from "redux"
import { reduxTokenAuthReducer } from "redux-token-auth"

import monsters from "./monsters"
import {
  createMonsterReducer as create_monster,
  createMonsterIsSubmittingReducer as createMonsterIsSubmitting,
} from "./create_monster"

export default combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,

  monsters,
  create_monster,
  createMonsterIsSubmitting,
})
