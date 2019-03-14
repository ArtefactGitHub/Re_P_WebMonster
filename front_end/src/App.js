import React from "react"
import "./App.css"

import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      nextId: 1,
    }
  }

  render() {
    return (
      <div className="App">
        <AddTodo OnSubmitTitle={this.handleOnSubmit} />
        <TodoList todos={this.state.todos} handleDelete={this.deleteTodo} />
      </div>
    )
  }

  deleteTodo = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id
      }),
    })
  }

  handleOnSubmit = title => {
    const { todos, nextId } = this.state
    this.setState({
      todos: [...todos, { id: nextId, title: title }],
    })
    this.setState({ nextId: nextId + 1 })
  }
}

export default App
