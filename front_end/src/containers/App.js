import React from "react"
import { connect } from "react-redux"

import AppPresenter from "../components/App"
import { loadTodo, addTodo, deleteTodo } from "../actions/App"

class App extends React.Component {
  componentDidMount() {
    this.props.loadTodo()
  }

  render() {
    const { todos, addTodo, deleteTodo } = this.props
    return (
      <div>
        <AppPresenter
          todos={todos}
          handleSubmitAddTodo={addTodo}
          handleOnClickDeleteTodo={deleteTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTodo: () => {
      dispatch(loadTodo())
    },
    addTodo: todo => {
      dispatch(addTodo(todo))
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
