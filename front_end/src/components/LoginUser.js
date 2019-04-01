import React from "react"
import { connect } from "react-redux"
import { signInUser } from "../config/redux-token-auth"
import { Link } from "react-router-dom"
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
      <div className="login-user">
        <Container>
          <Row>
            <Col>
              <h2>ログイン</h2>
              <Col xs={{ span: 8, offset: 2 }}>
                <Form onSubmit={handleOnSubmit}>
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

                  <input
                    type="submit"
                    value={isSubmitting ? "通信中..." : "ログイン"}
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  />
                </Form>

                <div className="for-register">
                  <Link to="/signUp">登録はこちら</Link>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  handleOnChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { signInUser, history } = this.props
    const { email, password } = this.state
    signInUser({ email, password })
      .then(res => {
        console.log("success signInUser", res)
        this.setState(initial_state)
        history.replace("/mypage")
      })
      .catch(error => {
        console.log("failure signInUser", error.response)
        this.setState(initial_state)
      })
  }
}

export default connect(
  null,
  { signInUser }
)(LoginUser)
