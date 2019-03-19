import { combineReducers } from "redux"

import todos from "./todos"
import addTodo from "./add_todo"

export default combineReducers({
  todos,
  addTodo,
})
