import React from "react"

const MonsterSimple = ({ monster }) => {
  return (
    <div>
      <div>ばんごう： #{monster.id}</div>
      <div>なまえ：{monster.name}</div>
      <div>とくちょう：{monster.description}</div>
      <button onClick={event => console.log("click")}>button</button>
    </div>
  )
}

export default MonsterSimple
