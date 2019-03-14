import React from "react"

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { todos } = this.props
    const list = todos.map(todo => {
      return (
        <li key={todo.id}>
          {todo.id}: {todo.title}
          <button onClick={event => this.handleOnClickDelete(todo.id)}>
            delete
          </button>
        </li>
      )
    })

    return (
      <div>
        <h2>TodoList</h2>
        <ul>{list}</ul>
      </div>
    )
  }

  handleOnClickDelete = id => {
    const { OnClickDelete } = this.props
    OnClickDelete(id)
  }
}

export default TodoList
