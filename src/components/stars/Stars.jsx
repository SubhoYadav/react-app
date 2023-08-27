import React, { useState, useEffect } from "react";
import "./stars.css";

export default function Stars() {
  const master = ["*", "*", "*", "*", "*", "-", "-", "-", "-", "-"];
  const [rating, setRating] = useState([]);
  const [rate, setRate] = useState(0);
  const [finalRate, setFinalRate] = useState(0);

  const handleRating = () => {
    // First argument is always the event object
    let start, end;
    start = 5 - rate;
    end = start + 5;
    setRating(master.slice(start, end));
  };

  function handleMouseOver(r) {
    setRate(r);
  }
  useEffect(handleRating, [rate]);

  useEffect(() => {
    console.log({ finalRate });
  }, [finalRate]);

  return (
    <div className="stars">
      {rating.map((star, index) => {
        return (
          <i
            className={star == "*" ? "ri-star-fill" : "ri-star-line"}
            key={index}
            onMouseOver={() => {
              handleMouseOver(index + 1);
            }}
            onMouseLeave={() => {
              if (!finalRate) {
                setRate(0);
              }
            }}
            onClick={() => {
              setFinalRate(index + 1);
            }}
          ></i>
        );
      })}
      <br />
    </div>
  );
}
