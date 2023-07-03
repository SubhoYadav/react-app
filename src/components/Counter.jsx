import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const counterFunction = () => {
    setCount(count + 1);
  };
  return (
    <div className="border container p-4">
      <h2>Counter Application</h2>
      <button className="btn btn-danger" onClick={counterFunction}>
        Count: {count}
      </button>
    </div>
  );
}
