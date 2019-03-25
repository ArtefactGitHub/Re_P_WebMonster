import React from "react"
import { Card } from "react-bootstrap"

const MonsterImage = ({ image }) => {
  let src =
    image === null || image.url === null ? "images/monster_sample.png" : image
  return (
    <div className="image-frame">
      <Card.Img variant="top" src={src} className="image" />
    </div>
  )
}

export default MonsterImage
