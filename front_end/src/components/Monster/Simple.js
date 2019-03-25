import React from "react"
import { Row, Col, Card } from "react-bootstrap"

const MonsterSimple = ({ monster }) => {
  return (
    <Card className="monster-card-simple">
      <Card.Body>
        <Card.Title className="title">
          #{monster.id} {monster.name}
        </Card.Title>
        <div className="image-frame">
          <Card.Img
            variant="top"
            src="images/monster_sample.png"
            className="image"
          />
        </div>

        <Row>
          <Col xs={{ span: 4, offset: 2 }}>
            <div className="param">
              <img
                src="images/card_frames/icon_0.png"
                alt="icon_0"
                className="icon"
              />
              {monster.hp}
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 0 }}>
            <div className="param">
              <img
                src="images/card_frames/icon_1.png"
                alt="icon_1"
                className="icon"
              />
              {monster.wp}
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 2 }}>
            <div className="param">
              <img
                src="images/card_frames/icon_2.png"
                alt="icon_2"
                className="icon"
              />
              {monster.attack}
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 0 }}>
            <div className="param">
              <img
                src="images/card_frames/icon_3.png"
                alt="icon_3"
                className="icon"
              />
              {monster.defense}
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 2 }}>
            <div className="param">
              <img
                src="images/card_frames/icon_4.png"
                alt="icon_4"
                className="icon"
              />
              {monster.speed}
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 0 }}>
            <div className="param">
              <img
                src="images/card_frames/icon_5.png"
                alt="icon_5"
                className="icon"
              />
              {monster.intelligence}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default MonsterSimple
