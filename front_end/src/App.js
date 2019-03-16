import React from "react"
import { connect } from "react-redux"
import axios from "axios"

import "./App.scss"

import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.host = process.env.REACT_APP_BACKEND_URL
  }

  componentDidMount() {
    axios
      .get(`${this.host}todos`)
      .then(res => {
        this.props.loadTodo(res.data)
      })
      .catch(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App">
        <AddTodo OnSubmitTitle={this.handleSubmitAddTodo} />
        <TodoList
          todos={this.props.todos}
          OnClickDelete={this.handleClickDeleteTodo}
        />
      </div>
    )
  }

  handleClickDeleteTodo = id => {
    axios
      .delete(`${this.host}todos/${id}`)
      .then(res => {
        this.props.deleteTodo(id)
      })
      .catch(data => {
        console.log(data)
      })
  }

  handleSubmitAddTodo = todo => {
    axios
      .post(`${this.host}todos`, todo)
      .then(res => {
        this.props.addTodo(res.data)
      })
      .catch(data => {
        console.log(data)
      })
  }
}

const mapStateToProps = state => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTodo: todos => {
      dispatch({ type: "LOAD_TODO", payload: { todos } })
    },
    addTodo: todo => {
      dispatch({ type: "ADD_TODO", payload: { todo } })
    },
    deleteTodo: id => {
      dispatch({ type: "DELETE_TODO", payload: { id } })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
