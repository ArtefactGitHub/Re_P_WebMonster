import React from "react"
import { connect } from "react-redux"

import AppPresenter from "../components/App"
import {
  componentDidMount,
  handleSubmitAddTodo,
  handleClickDeleteTodo,
} from "../actions/App"

class App extends React.Component {
  componentDidMount() {
    this.props.componentDidMount()
  }

  render() {
    const { todos, handleSubmitAddTodo, handleClickDeleteTodo } = this.props
    return (
      <div>
        <AppPresenter
          todos={todos}
          handleSubmitAddTodo={handleSubmitAddTodo}
          handleClickDeleteTodo={handleClickDeleteTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    componentDidMount: () => {
      dispatch(componentDidMount())
    },
    handleSubmitAddTodo: todo => {
      dispatch(handleSubmitAddTodo(todo))
    },
    handleClickDeleteTodo: id => {
      dispatch(handleClickDeleteTodo(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
