const initial_state = {
  title: "",
  description: "",
  priority: 0,
  // deadline:
}

const addTodoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "RESET":
      return initial_state
    case "CHANGE_TITLE":
      return { ...state, title: action.payload.title }
    case "CHANGE_DESCRIPTION":
      return { ...state, description: action.payload.description }
    case "CHANGE_PRIORITY":
      return { ...state, priority: action.payload.priority }

    default:
      return state
  }
}

export default addTodoReducer
