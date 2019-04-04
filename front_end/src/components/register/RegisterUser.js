import React from "react"
import {
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
} from "react-bootstrap"

const RegisterUser = ({
  name,
  email,
  password,
  passwordConfirmation,
  isSubmitting,
  handleOnChange,
  handleOnSubmit,
}) => {
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
              <FormGroup controlId="passwordConfirmation">
                <FormLabel>パスワード確認</FormLabel>
                <FormControl
                  type="password"
                  required={true}
                  value={passwordConfirmation}
                  onChange={event =>
                    handleOnChange(event, "passwordConfirmation")
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

export default RegisterUser
