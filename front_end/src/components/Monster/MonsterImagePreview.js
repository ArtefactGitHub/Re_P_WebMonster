import React from "react"
import { Card } from "react-bootstrap"
import Settings from "../../config/application"

const MonsterImagePreview = ({ image }) => {
  const src =
    image == null ? "images/monster_sample.png" : Settings.ImageUrlLocal(image)

  return (
    <div className="monster-image">
      <div className="image-frame">
        <Card.Img variant="top" src={src} className="image" />
      </div>
    </div>
  )
}

export default MonsterImagePreview
