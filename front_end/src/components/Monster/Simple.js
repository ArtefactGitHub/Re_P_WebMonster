import React from "react"
import { Card } from "react-bootstrap"

const MonsterSimple = ({ monster }) => {
  return (
    <Card className="monster-card">
      <Card.Body>
        <Card.Title>{monster.name}</Card.Title>
        <Card.Text>ばんごう： #{monster.id}</Card.Text>
        <Card.Text>とくちょう：{monster.description}</Card.Text>
        <button onClick={event => console.log("click")}>button</button>
      </Card.Body>
    </Card>
  )
}

export default MonsterSimple
