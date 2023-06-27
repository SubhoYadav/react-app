import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [plang, setPLang] = useState([]);
  const getProgrammingLanguages = async () => {
    const programmingLanguages = await axios.get(
      "http://localhost:8089/db/programminglanguages"
    );
    console.log({ programmingLanguages });
    if (programmingLanguages.data.resp_status) {
      setPLang(programmingLanguages.data.resp_data.data);
    }
  };
  useEffect(() => {
    getProgrammingLanguages();
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Released Year</th>
            <th scope="col">Githut Rank</th>
            <th scope="col">Pypl Rank</th>
            <th scope="col">Tiobe Rank</th>
          </tr>
        </thead>
        <tbody>
          {plang.map((lang) => {
            return (
              <tr key={lang.id}>
                <th scope="row">{lang.id}</th>
                <td>{lang.name}</td>
                <td>{lang.released_year}</td>
                <td>{lang.githut_rank}</td>
                <td>{lang.pypl_rank}</td>
                <td>{lang.tiobe_rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
