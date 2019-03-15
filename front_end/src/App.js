import React from "react"
import "./App.scss"

import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }

    this.host = "http://localhost:3001/"
  }

  componentDidMount() {
    axios
      .get(`${this.host}todos`)
      .then(res => {
        this.setState({ todos: res.data })
      })
      .catch(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App">
        <AddTodo OnSubmitTitle={this.addTodo} />
        <TodoList todos={this.state.todos} OnClickDelete={this.deleteTodo} />
      </div>
    )
  }

  deleteTodo = id => {
    const { todos } = this.state

    axios
      .delete(`${this.host}todos/${id}`)
      .then(res => {
        this.setState({
          todos: todos.filter(todo => {
            return todo.id !== id
          }),
        })
      })
      .catch(data => {
        console.log(data)
      })
  }

  addTodo = title => {
    const { todos } = this.state
    const todo = { title: title, description: "des" }
    axios
      .post(`${this.host}todos`, todo)
      .then(res => {
        this.setState({
          todos: [...todos, res.data],
        })
      })
      .catch(data => {
        console.log(data)
      })
  }
}

export default App
