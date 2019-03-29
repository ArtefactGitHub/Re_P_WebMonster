import React from "react"
import { Link } from "react-router-dom"

const AfterLoginHeader = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/signOut">ログアウト</Link>
        </li>
        <li>
          <Link to="/">モンスター一覧</Link>
        </li>
        <li>
          <Link to="/mypage/monsters/new">モンスター作成</Link>
        </li>
      </ul>
    </div>
  )
}

export default AfterLoginHeader
