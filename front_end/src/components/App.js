import React from "react"

import "../App.scss"

import AddTodo from "../containers/AddTodo"
import TodoList from "./TodoList"

const App = ({ todos, handleSubmitAddTodo, handleClickDeleteTodo }) => {
  return (
    <div className="App">
      <AddTodo OnSubmitTitle={handleSubmitAddTodo} />
      <TodoList todos={todos} OnClickDelete={handleClickDeleteTodo} />
    </div>
  )
}

export default App
