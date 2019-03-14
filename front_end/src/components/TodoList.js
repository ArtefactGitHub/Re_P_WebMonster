import React from "react"

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const list = this.props.todos.map(todo => {
      return (
        <li key={todo.id}>
          {todo.id}: {todo.title}
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
}

export default TodoList
