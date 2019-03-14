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
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

  handleOnSubmit = title => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId, title: title }],
    })
    this.setState({ nextId: this.state.nextId + 1 })
  }
}

export default App
