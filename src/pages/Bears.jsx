import React from "react";
import useStore from "../zustland/store";
function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  //  The useStore hook will return the store's method increasePopulation into increasePopulation
  return (
    <React.Fragment>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => increasePopulation()}
      >
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => removeAllBears("Subho")}>
        -
      </button>
    </React.Fragment>
  );
}
export default function Bears() {
  return (
    <div>
      <p>Current poppulation of bears is: {useStore((state) => state.bears)}</p>
      <Controls />
    </div>
  );
}
