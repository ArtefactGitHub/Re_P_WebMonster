import React from "react"
import { connect } from "react-redux"
import { signInUser, signOutUser } from "../redux-token-auth-config"
import {
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap"

const initial_state = {
  email: "",
  password: "",
  isSubmitting: false,
}
class LoginUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = initial_state
  }
  render() {
    const { email, password, isSubmitting } = this.state
    const { handleOnChange, handleOnSubmit } = this
    return (
      <Container>
        <Row>
          <Col>
            <h2>ログイン</h2>
            <Form onSubmit={handleOnSubmit}>
              <Col xs={{ span: 8, offset: 2 }}>
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
              </Col>

              <input
                type="submit"
                value={isSubmitting ? "通信中..." : "ログイン"}
                className="btn btn-primary"
                disabled={isSubmitting}
              />

              <Button onClick={this.handleOnClick}>ログアウト</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }

  handleOnClick = event => {
    const { signOutUser } = this.props
    signOutUser()
      .then(res => {
        console.log("success signOutUser", res)
        this.setState(initial_state)
      })
      .catch(error => {
        console.log("failure signOutUser", error.response)
        this.setState(initial_state)
      })
  }

  handleOnChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { signInUser } = this.props
    const { email, password } = this.state
    signInUser({ email, password })
      .then(res => {
        console.log("success signInUser", res)
        this.setState(initial_state)
      })
      .catch(error => {
        console.log("failure signInUser", error.response)
        this.setState(initial_state)
      })
  }
}

export default connect(
  null,
  { signInUser, signOutUser }
)(LoginUser)
