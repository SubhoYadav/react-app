import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [insights, setInsights] = useState("Generating result insights !");
  async function startExpt() {
    const response = await axios.post(
      "http://localhost:8089/promise/experiment"
    );
    console.log(response.data);
    const message = response.data.name;
    setName(message);
  }
  useEffect(() => {
    startExpt();
  }, []);

  return (
    <>
      <div classname="form-floating mt-5">
        <textarea
          className="form-control"
          placeholder={insights}
          id="floatingTextarea2"
          style={{ height: "100px" }}
        >
          {insights}
        </textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
      </div>
    </>
  );
}

export default App;
