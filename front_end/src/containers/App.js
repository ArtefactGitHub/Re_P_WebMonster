import React from "react"
import { connect } from "react-redux"
import axios from "axios"

import AppPresenter from "../components/App"

const HOST_URL = process.env.REACT_APP_BACKEND_URL

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

const componentDidMount = () => {
  return dispatch => {
    axios
      .get(`${HOST_URL}todos`)
      .then(res => {
        dispatch({ type: "LOAD_TODO", payload: { todos: res.data } })
      })
      .catch(data => {
        console.log(data)
      })
  }
}

const handleSubmitAddTodo = todo => {
  return dispatch => {
    axios
      .post(`${HOST_URL}todos`, todo)
      .then(res => {
        dispatch({ type: "ADD_TODO", payload: { todo: res.data } })
      })
      .catch(data => {
        console.log(data)
      })
  }
}

const handleClickDeleteTodo = id => {
  return dispatch => {
    axios
      .delete(`${HOST_URL}todos/${id}`)
      .then(res => {
        dispatch({ type: "DELETE_TODO", payload: { id: id } })
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
