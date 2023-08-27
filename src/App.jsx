import Stars from "./components/stars/Stars";
import Level from "./components/level/Level";
function App() {
  return (
    <div className="main">
      <div className="card">
        <div className="review">
          <h5 style={{ fontSize: "25px" }}>Customer Review</h5>
          <Stars />
          <small>40 customer ratings</small>
        </div>
        <div className="analysis">
          {new Array(5).fill(null).map((e, index) => {
            return (
              <p key={index}>
                <Level num={index} />
              </p>
            );
          })}

          <small>How do we calculate ratings </small>
        </div>
      </div>
    </div>
  );
}

export default App;
