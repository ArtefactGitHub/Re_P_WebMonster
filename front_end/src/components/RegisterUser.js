import React from "react"
import { connect } from "react-redux"
import { registerUser } from "../config/redux-token-auth"
import {
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
} from "react-bootstrap"

const initial_state = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  isSubmitting: false,
}
class RegisterUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = initial_state
  }
  render() {
    const {
      name,
      email,
      password,
      password_confirmation,
      isSubmitting,
    } = this.state
    const { handleOnChange, handleOnSubmit } = this
    return (
      <Container>
        <Row>
          <Col>
            <h2>ユーザー登録</h2>
            <Form onSubmit={handleOnSubmit}>
              <Col xs={{ span: 8, offset: 2 }}>
                <FormGroup controlId="name">
                  <FormLabel>名前</FormLabel>
                  <FormControl
                    type="text"
                    required={true}
                    value={name}
                    onChange={event => handleOnChange(event, "name")}
                  />
                </FormGroup>
                <FormGroup controlId="email">
                  <FormLabel>メールアドレス</FormLabel>
                  <FormControl
                    type="text"
                    required={true}
                    value={email}
                    onChange={event => handleOnChange(event, "email")}
                  />
                </FormGroup>
                <FormGroup controlId="password">
                  <FormLabel>パスワード</FormLabel>
                  <FormControl
                    type="password"
                    required={true}
                    value={password}
                    onChange={event => handleOnChange(event, "password")}
                  />
                </FormGroup>
                <FormGroup controlId="password_confirmation">
                  <FormLabel>パスワード確認</FormLabel>
                  <FormControl
                    type="password"
                    required={true}
                    value={password_confirmation}
                    onChange={event =>
                      handleOnChange(event, "password_confirmation")
                    }
                  />
                </FormGroup>
              </Col>

              <input
                type="submit"
                value={isSubmitting ? "通信中..." : "登録"}
                className="btn btn-primary"
                disabled={isSubmitting}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }

  handleOnChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { registerUser } = this.props
    const { name, email, password } = this.state
    registerUser({ name, email, password })
      .then(res => {
        console.log("success registerUser", res)
        this.setState(initial_state)
      })
      .catch(error => {
        console.log("failure registerUser", error.response)
        this.setState(initial_state)
      })
  }
}

export default connect(
  null,
  { registerUser }
)(RegisterUser)
