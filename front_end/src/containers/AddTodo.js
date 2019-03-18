import React from "react"
import AddTodoPresenter from "../components/AddTodo"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.initial_state = {
      title: "",
      description: "",
      priority: 0,
      // deadline:
    }
    this.state = this.initial_state
  }

  render() {
    const { title, description, priority } = this.state
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
    this.setState({ [key]: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.OnSubmitTitle(this.state)
    this.setState(this.initial_state)
  }
}

export default AddTodo
