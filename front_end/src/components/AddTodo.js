import React from "react"

const AddTodo = ({
  title,
  description,
  priority,
  handleOnChange,
  handleOnSubmit,
}) => {
  return (
    <div>
      <h2>AddTodo</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          required={true}
          onChange={event => handleOnChange(event, "title")}
          value={title}
        />
        <textarea
          onChange={event => handleOnChange(event, "description")}
          value={description}
          cols="40"
          rows="5"
        />
        <input
          onChange={event => handleOnChange(event, "priority")}
          value={priority}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddTodo
