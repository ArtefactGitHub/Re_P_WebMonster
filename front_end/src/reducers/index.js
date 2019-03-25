import { combineReducers } from "redux"

import monsters from "./monsters"
import create_monster from "./create_monster"

export default combineReducers({
  monsters,
  create_monster,
})
