import { combineReducers } from "redux"
import { reduxTokenAuthReducer as reduxTokenAuth } from "redux-token-auth"
import { reducer as notifications } from "react-notification-system-redux"

import register from "./register"
import session from "./session"
import monsters from "./monsters"
import {
  createMonsterReducer as create_monster,
  createMonsterIsSubmittingReducer as createMonsterIsSubmitting,
} from "./create_monster"

export default combineReducers({
  reduxTokenAuth,
  notifications,

  register,
  session,
  monsters,
  create_monster,
  createMonsterIsSubmitting,
})
