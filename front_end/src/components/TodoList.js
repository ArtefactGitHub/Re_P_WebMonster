import React from "react"

const TodoList = ({ todos, handleOnClickDeleteTodo }) => {
  const list = todos.map(todo => {
    return (
      <li key={todo.id}>
        <div>
          {todo.id}: {todo.title}: {todo.priority}
          <button onClick={event => handleOnClickDeleteTodo(todo.id)}>
            delete
          </button>
        </div>
        <div>{todo.description}</div>
      </li>
    )
  })

  return (
    <div>
      <h2>TodoList</h2>
      <ul>{list}</ul>
    </div>
  )
}

export default TodoList
