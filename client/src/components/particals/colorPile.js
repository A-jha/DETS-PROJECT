import React from "react"

const ColorPile = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: "2rem", height: "1rem", background: "#ffff00" }}
      ></div>
      <div
        style={{ width: "2rem", height: "1rem", background: "#ff00ff" }}
      ></div>
      <div
        style={{ width: "2rem", height: "1rem", background: "#00ffff" }}
      ></div>
      <div
        style={{ width: "2rem", height: "1rem", background: "#00ff00" }}
      ></div>
      <div
        style={{ width: "2rem", height: "1rem", background: "#ff0000" }}
      ></div>
      <div
        style={{ width: "2rem", height: "1rem", background: "#0000ff" }}
      ></div>
    </div>
  )
}

export default ColorPile
