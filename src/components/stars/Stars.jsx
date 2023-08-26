import React, { useState, useEffect } from "react";
import "./stars.css";

export default function Stars() {
  const master = ["*", "*", "*", "*", "*", "-", "-", "-", "-", "-"];
  const [rating, setRating] = useState([]);
  const [rate, setRate] = useState(0);

  const handleRating = (eventObj) => {
    // First argument is always the event object
    let start, end;
    start = 5 - rate;
    end = start + 5;
    console.log({ start, end });
    setRating(master.slice(start, end));
  };

  function handleMouseOver(r) {
    setRate(r);
  }
  useEffect(handleRating, [rate]);

  return (
    <div className="stars">
      {rating.map((star, index) => {
        if (star == "*") {
          return (
            <i
              className="ri-star-fill"
              key={index}
              onMouseOver={() => handleMouseOver(index + 1)}
            ></i>
          );
        } else {
          return (
            <i
              className="ri-star-line"
              key={index}
              onMouseOver={() => handleMouseOver(index + 1)}
            ></i>
          );
        }
      })}
      <br />
      <button style={{ margin: "10px" }} onClick={() => setRate(3)}>
        Give rating !
      </button>
    </div>
  );
}
