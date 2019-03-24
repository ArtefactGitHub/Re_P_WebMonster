import React from "react"
import { Form, FormLabel, FormGroup, FormControl } from "react-bootstrap"

const CreateMonster = ({ handleOnChange, handleOnSubmit }) => {
  return (
    <div>
      <h2>Monster List</h2>
      <div>
        <Form onSubmit={handleOnSubmit}>
          <FormGroup controlId="name">
            <FormLabel>なまえ</FormLabel>
            <FormControl
              type="text"
              required={true}
              onChange={event => handleOnChange(event, "name")}
            />
          </FormGroup>

          <FormGroup controlId="description">
            <FormLabel>とくちょう</FormLabel>
            <FormControl
              type="textarea"
              onChange={event => handleOnChange(event, "description")}
              cols="40"
              rows="5"
            />
          </FormGroup>

          <input type="submit" value="Add" className="btn btn-primary" />
        </Form>
      </div>
    </div>
  )
}

export default CreateMonster
