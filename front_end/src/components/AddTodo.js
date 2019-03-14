import React from "react"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: "",
    }
  }

  render() {
    const { inputText } = this.state
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} value={inputText} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }

  handleOnChange = event => {
    this.setState({ inputText: event.target.value })
  }

  handleOnSubmit = event => {
    const { inputText } = this.state
    event.preventDefault()
    this.props.OnSubmitTitle(inputText)
    this.setState({ inputText: "" })
  }
}

export default AddTodo
