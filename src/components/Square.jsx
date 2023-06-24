import React from "react";
import "./square.css";
export default function Square(props) {
  return (
    <div
      onClick={() => props.onClick(props.value)}
      style={{ border: "1px solid black", width: "100%", minHeight: "5rem" }}
    >
      <p>{props.value}</p>
    </div>
  );
}
