import React from "react"
import AddTodoPresenter from "../components/AddTodo"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initial_state()
  }

  initial_state = () => {
    return {
      title: "",
      description: "",
      priority: 0,
      // deadline:
    }
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
    this.setState(this.initial_state())
  }
}

export default AddTodo
