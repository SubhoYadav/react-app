import React from "react";
import { useCallback } from "react";
import { useState } from "react";

export default function SelecatbleGrid({ rows = 10, cols = 10 }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);
  const [cellsToHighlight, setCellsToHighlight] = useState([]);

  const handleOnMouseDown = (boxNum) => {
    setIsMouseDown(true);
    setSelectedCells([boxNum]);
  };
  const handleOnMouseEnter = useCallback(
    (boxNum) => {
      if (isMouseDown) {
        let startNum = selectedCells[0];
        let endNum = boxNum;

        // if (Math.min(startNum, endNum) != startNum) {
        //   let k= endNum
        //   endNum = startNum
        //   startNum = k;
        // }

        let startRow = Math.floor((startNum - 1) / cols);
        let startCol = (startNum - 1) % cols;

        let endRow = Math.floor((endNum - 1) / cols);
        let endCol = (endNum - 1) % cols;

        // // If I drag from a bigger num to a smaller num I cannot iterated
        let minrow = Math.min(startRow, endRow);
        let maxrow = Math.max(startRow, endRow);

        let mincol = Math.min(startCol, endCol);
        let maxcol = Math.max(startCol, endCol);

        let selected = [];
        for (let r = minrow; r <= maxrow; r++) {
          for (let c = mincol; c <= maxcol; c++) {
            selected.push(r * cols + c + 1); // row * cols + col + 1
          }
        }
        setCellsToHighlight(selected);
      }
    },
    [isMouseDown]
  );
  const handleOnMouseUp = (boxNum) => {
    // setSelectedCells([])
    setIsMouseDown(false);
  };
  return (
    <div className={`app`} style={{ "--rows": rows, "--cols": cols }}>
      {[...Array(rows * cols)].map((_, index) => {
        return (
          <div
            key={index + 1}
            onMouseDown={() => handleOnMouseDown(index + 1)}
            onMouseEnter={() => handleOnMouseEnter(index + 1)}
            onMouseUp={() => handleOnMouseUp(index + 1)}
            className={`box ${
              cellsToHighlight.includes(index + 1) ? "highlight" : ""
            }`}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}
