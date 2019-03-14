import React from "react"

class AddTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      inputText: "",
    }
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form>
          <input value={this.state.inputText} />
          <input onClick={this.handleOnClick} type="button" value="Add" />
        </form>
      </div>
    )
  }

  handleOnChange = event => {
    event.preventDefault()
    this.setState({ inputText: event.target.value })
  }

  handleOnClick = event => {
    this.setState({ inputText: "" })
  }
}

export default AddTodo
