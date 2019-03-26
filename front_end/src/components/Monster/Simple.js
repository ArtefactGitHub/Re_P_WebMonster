import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import MonsterImage from "./MonsterImage"
import MonsterParameter from "./MonsterParameter"
import { CREATE_MONSTER_PARAMS_INITIAL_STATE } from "../../constants"

const MonsterSimple = ({ monster }) => {
  const param_layouts = Object.entries(CREATE_MONSTER_PARAMS_INITIAL_STATE).map(
    ([key, value], index) => {
      const offset = index % 2 ? 0 : 2
      return (
        <Col xs={{ span: 4, offset: offset }} key={`${monster.id}-${index}`}>
          <MonsterParameter
            src={`images/icons/icon_${index}.png`}
            alt={`icon_${index}`}
            value={value}
          />
        </Col>
      )
    }
  )

  return (
    <Card className="monster-card-simple">
      <Card.Body>
        <Card.Title className="title">
          #{monster.id} {monster.name}
        </Card.Title>

        <MonsterImage image={monster.image} />

        <Row>{param_layouts}</Row>
      </Card.Body>
    </Card>
  )
}

export default MonsterSimple
