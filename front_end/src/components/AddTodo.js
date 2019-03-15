import React from "react"

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
        <h2>AddTodo</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input
            required={true}
            onChange={event => this.handleOnChange(event, "title")}
            value={title}
          />
          <textarea
            onChange={event => this.handleOnChange(event, "description")}
            value={description}
            cols="40"
            rows="5"
          />
          <input
            onChange={event => this.handleOnChange(event, "priority")}
            value={priority}
          />
          <input type="submit" value="Add" />
        </form>
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
