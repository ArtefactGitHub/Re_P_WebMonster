import React from "react"
import { Card } from "react-bootstrap"

const MonsterImagePreview = ({ image }) => {
  var createObjectURL =
    (window.URL || window.webkitURL).createObjectURL || window.createObjectURL

  const src =
    image == null ? "images/monster_sample.png" : createObjectURL(image)

  return (
    <div className="monster-image">
      <div className="image-frame">
        <Card.Img variant="top" src={src} className="image" />
      </div>
    </div>
  )
}

export default MonsterImagePreview
