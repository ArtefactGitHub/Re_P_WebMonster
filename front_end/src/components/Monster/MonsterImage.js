import React from "react"
import { Card } from "react-bootstrap"
import Settings from "../../config/application"

const MonsterImage = ({ image }) => {
  let src =
    image === null || image.url === null
      ? Settings.PublicImageUrl("monster_sample.png")
      : Settings.ImageUrl(image)
  return (
    <div className="monster-image">
      <div className="image-frame">
        <Card.Img variant="top" src={src} className="image" />
      </div>
    </div>
  )
}

export default MonsterImage
