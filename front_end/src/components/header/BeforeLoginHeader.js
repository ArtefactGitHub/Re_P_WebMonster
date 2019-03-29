import React from "react"
import { Link } from "react-router-dom"

const BeforeLoginHeader = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signUp">ユーザー登録</Link>
        </li>
        <li>
          <Link to="/signIn">ログイン</Link>
        </li>
        <li>
          <Link to="/">モンスター一覧</Link>
        </li>
      </ul>
    </div>
  )
}

export default BeforeLoginHeader
