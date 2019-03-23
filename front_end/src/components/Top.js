import React from "react"

const Top = ({ monsters }) => {
  const list = monsters.map(monster => {
    return (
      <li key={monster.id}>
        <div>
          <div>ばんごう： #{monster.id}</div>
          <div>なまえ：{monster.name}</div>
          <div>とくちょう：{monster.description}</div>
          <button onClick={event => console.log("click")}>button</button>
        </div>
      </li>
    )
  })

  return (
    <div>
      <h2>Monster List</h2>
      <ul>{list}</ul>
    </div>
  )
}

export default Top
