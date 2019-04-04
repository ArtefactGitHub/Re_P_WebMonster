import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown, Button, Image } from "react-bootstrap"

const AfterSignInHeader = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <Image src="/logo.jpg" className="logo" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/mypage/features" className="nav-link">
              Features
            </Link>

            <NavDropdown title="Myモンスター" id="collasible-nav-dropdown">
              <Link to="/mypage/monsters/new" className="dropdown-item">
                作成
              </Link>
              <Link to="/mypage/monsters/#action_1" className="dropdown-item">
                仮：アクション１
              </Link>
              <Link to="/mypage/monsters/#action_2" className="dropdown-item">
                仮：アクション２
              </Link>

              <NavDropdown.Divider />
              <Link to="/mypage/monsters/#action_3" className="dropdown-item">
                仮：アクション３（セパレート付き）
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/signOut" className="link-to-signout">
              <Button className="btn btn-default btn-raised">ログアウト</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AfterSignInHeader
