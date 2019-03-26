import React from "react"

const MonsterParameter = ({ src, value, alt }) => {
  return (
    <div className="param">
      <img src={src} alt={src} className="icon" />
      {value}
    </div>
  )
}

export default MonsterParameter
