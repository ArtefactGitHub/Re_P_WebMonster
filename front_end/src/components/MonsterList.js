import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MonsterSimple } from "./Monster"

const MonsterList = ({ monsters }) => {
  const list = monsters.map(monster => {
    return (
      <Col xs={12} md={{ span: 6, offset: 0 }} key={monster.id}>
        <MonsterSimple monster={monster} />
      </Col>
    )
  })

  return (
    <div className="MonsterList">
      <Container>
        <h2>Monster List</h2>
        <Row className="monster-list">{list}</Row>
      </Container>
    </div>
  )
}

export default MonsterList
