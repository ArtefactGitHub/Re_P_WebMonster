import React from "react"
import { connect } from "react-redux"
import AddTodoPresenter from "../components/AddTodo"
import { changeParam, reset } from "../actions/AddTodo"

class AddTodo extends React.Component {
  render() {
    const { title, description, priority } = this.props.todo
    return (
      <div>
        <AddTodoPresenter
          title={title}
          description={description}
          priority={priority}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }

  handleOnChange = (event, key) => {
    this.props.changeParam(key, event.target.value)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.OnSubmitTitle(this.props.todo)
    this.props.reset()
  }
}

const mapStateToProps = state => {
  return {
    todo: state.addTodo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeParam: (key, value) => {
      dispatch(changeParam(key, value))
    },
    reset: () => {
      dispatch(reset())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
