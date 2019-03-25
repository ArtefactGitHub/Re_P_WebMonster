import React from "react"
import { MonsterSimple } from "./Monster"

const MonsterList = ({ monsters }) => {
  const list = monsters.map(monster => {
    return <MonsterSimple key={monster.id} monster={monster} />
  })

  return (
    <div>
      <h2>Monster List</h2>
      <ul>{list}</ul>
    </div>
  )
}

export default MonsterList
