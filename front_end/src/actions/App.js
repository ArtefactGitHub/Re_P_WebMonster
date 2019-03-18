import axios from "axios"
import Settings from "../config/application"

const componentDidMount = () => {
  return dispatch => {
    axios
      .get(`${Settings.HOST_URL}todos`)
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
      .post(`${Settings.HOST_URL}todos`, todo)
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
      .delete(`${Settings.HOST_URL}todos/${id}`)
      .then(res => {
        dispatch({ type: "DELETE_TODO", payload: { id: id } })
      })
      .catch(data => {
        console.log(data)
      })
  }
}

export { componentDidMount, handleSubmitAddTodo, handleClickDeleteTodo }
