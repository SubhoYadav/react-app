import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [img, setImg] = useState("");
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8089/page");
      console.log(response);
      const source = `data:image/jpeg;base64,${response.data.image}`;
      setImg(source);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hey There!!!</h1>
      <img src={img} alt="" />
    </>
  );
}

export default App;
