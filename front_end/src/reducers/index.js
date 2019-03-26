import { combineReducers } from "redux"

import monsters from "./monsters"
import {
  createMonsterReducer as create_monster,
  createMonsterIsSubmittingReducer as createMonsterIsSubmitting,
} from "./create_monster"

export default combineReducers({
  monsters,
  create_monster,
  createMonsterIsSubmitting,
})
