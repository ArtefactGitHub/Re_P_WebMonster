import React from "react"

import "../stylesheets/App.scss"

import AddTodo from "../containers/AddTodo"
import TodoList from "../containers/TodoList"

const App = ({ todos, handleSubmitAddTodo, handleOnClickDeleteTodo }) => {
  return (
    <div className="App">
      <AddTodo OnSubmitTitle={handleSubmitAddTodo} />
      <TodoList
        todos={todos}
        handleOnClickDeleteTodo={handleOnClickDeleteTodo}
      />
    </div>
  )
}

export default App
