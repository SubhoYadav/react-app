import React from "react";
import "./level.css";

export default function Level(props) {
  return (
    <div className="level-container">
      <p style={{ color: "blue" }}>{props.num + 1} start</p>
      <p className="level-meter">x</p>
      <p>85 %</p>
    </div>
  );
}
