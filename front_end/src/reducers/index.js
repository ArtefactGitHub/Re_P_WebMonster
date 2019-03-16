const initial_state = { todos: [] }

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "LOAD_TODO":
      return action.payload.todos
    case "ADD_TODO":
      return [...state, action.payload.todo]
    case "DELETE_TODO":
      return state.filter(todo => {
        return todo.id !== action.payload.id
      })
    default:
      return state
  }
}

export default reducer
