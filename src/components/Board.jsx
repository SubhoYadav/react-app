import React, { useState } from "react";
import Square from "./Square";
import "./board.css";

function Board() {
  const [register, setRegister] = useState(new Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner() {
    for (let combination of winningCombinations) {
      let [i, j, k] = combination;
      console.log(register[i], register[j], register[k]);
      if (
        register[i] != null &&
        register[i] == register[j] &&
        register[i] == register[k]
      ) {
        setWinner(`${turn ? "X" : "O"} Won The Game`);
      }
    }
  }

  const handleUserInput = (index) => {
    register[index] = turn ? "X" : "O";
    setTurn(!turn);
    setRegister([...register]);
    checkWinner();
  };

  return (
    <>
      {winner ? (
        <>
          {winner}
          <button
            style={{ margin: "1rem" }}
            onClick={() => {
              setWinner("");
              setRegister(new Array(9).fill(null));
            }}
          >
            Play Again
          </button>
        </>
      ) : (
        <div className="board">
          <div className="row">
            <Square
              value={register[0]}
              onClick={() => handleUserInput(0)}
            ></Square>
            <Square
              value={register[1]}
              onClick={() => handleUserInput(1)}
            ></Square>
            <Square
              value={register[2]}
              onClick={() => handleUserInput(2)}
            ></Square>
          </div>

          <div className="row">
            <Square
              value={register[3]}
              onClick={() => handleUserInput(3)}
            ></Square>
            <Square
              value={register[4]}
              onClick={() => handleUserInput(4)}
            ></Square>
            <Square
              value={register[5]}
              onClick={() => handleUserInput(5)}
            ></Square>
          </div>

          <div className="row">
            <Square
              value={register[6]}
              onClick={() => handleUserInput(6)}
            ></Square>
            <Square
              value={register[7]}
              onClick={() => handleUserInput(7)}
            ></Square>
            <Square
              value={register[8]}
              onClick={() => handleUserInput(8)}
            ></Square>
          </div>
        </div>
      )}
    </>
  );
}

export { Board };

// Event Listeners should only be put on the html elements and not on the component
// Event Listener on component is a prop passed into that component

// Conditional rendering should always be done inside of an html element
