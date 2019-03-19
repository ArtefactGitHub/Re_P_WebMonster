import React from "react"
import TodoListPresenter from "../components/TodoList"

const TodoList = ({ todos, handleOnClickDeleteTodo }) => {
  return (
    <div>
      <TodoListPresenter
        todos={todos}
        handleOnClickDeleteTodo={handleOnClickDeleteTodo}
      />
    </div>
  )
}

export default TodoList
