import React from "react"
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

const LoginUser = ({
  email,
  password,
  isSubmitting,
  handleOnChange,
  handleOnSubmit,
}) => {
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

export default LoginUser
