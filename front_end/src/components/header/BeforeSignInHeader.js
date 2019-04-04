import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Button, Image } from "react-bootstrap"

const BeforeSignInHeader = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <Image src="/logo.jpg" className="logo" />
          </Navbar.Brand>
        </Link>
        <Link to="/signIn" className="link-to-signin">
          <Button className="btn btn-default btn-raised">ログイン</Button>
        </Link>
      </Navbar>
    </div>
  )
}

export default BeforeSignInHeader
