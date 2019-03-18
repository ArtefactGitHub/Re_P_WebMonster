import React from "react"

import "../App.scss"

import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

class App extends React.Component {
  componentDidMount() {
    this.props.componentDidMount()
  }

  render() {
    const { todos, handleSubmitAddTodo, handleClickDeleteTodo } = this.props
    return (
      <div className="App">
        <AddTodo OnSubmitTitle={handleSubmitAddTodo} />
        <TodoList todos={todos} OnClickDelete={handleClickDeleteTodo} />
      </div>
    )
  }
}

export default App
