import "./index.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae
        dolorum suscipit praesentium? Itaque illum atque saepe quibusdam labore
        consectetur voluptates unde! Blanditiis accusamus facere omnis error
        tempora vel, mollitia repellat molestiae!
      </p>
      <Link to="/store">Go to store !</Link>
      <br />
      <Link to="/bears">Go to Bears !</Link>
    </>
  );
}

export default App;
