import React from "react"
import "./App.css"

import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  render() {
    return (
      <div className="App">
        <AddTodo OnSubmitTitle={this.handleOnSubmit} />
        <TodoList />
      </div>
    )
  }

  handleOnSubmit = title => {
    this.setState({ todos: [...this.state.todos, { title: title }] })
  }
}

export default App
