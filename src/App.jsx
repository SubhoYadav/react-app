import { useState, useEffect, useRef } from "react";
import axios from "axios";
function App() {
  const [plang, setPLang] = useState([]);
  const [dataCount, _] = useState(16);
  const [currPage, setCurrPage] = useState(1);

  const uploadCsv = async (event) => {
    event.preventDefault();
    console.log("Event.target.value", event.target.value);
    const payload = new FormData();
    payload.append("file", event.target);
    const uploadResponse = await axios.post(
      "http://localhost:8089/csv/upload",
      payload
    );
    console.log({ uploadResponse });
  };
  async function fetchData(page = 1) {
    const programmingLanguages = await axios.get(
      `http://localhost:8089/db/programminglanguages/${page}`
    );
    console.log({ programmingLanguages });
    if (programmingLanguages.data.resp_status) {
      setPLang(programmingLanguages.data.resp_data.data);
    }
  }
  useEffect(() => {
    fetchData(currPage);
  }, [currPage]);
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
      <nav aria-label="...">
        <ul className="pagination">
          <li
            className="page-item disabled"
            onClick={() => {
              currPage > 1 && setCurrPage(currPage - 1);
            }}
          >
            <a className="page-link" href="#" tabIndex="-1">
              Previous
            </a>
          </li>
          {new Array(Math.ceil(dataCount / 4)).fill(null).map((_, index) => {
            return (
              <li
                className={`page-item ${currPage == index + 1 && "active"}`}
                onClick={() => setCurrPage(index + 1)}
                key={index}
              >
                <a className="page-link" href="#">
                  {index + 1}
                </a>
              </li>
            );
          })}
          <li
            className="page-item"
            onClick={() => {
              currPage < Math.ceil(dataCount / 4) && setCurrPage(currPage + 1);
            }}
          >
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <form className="mb-3" onSubmit={uploadCsv}>
        <label htmlFor="formFile" className="form-label">
          Provide a csv file
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          name="csv"
        />
        <input
          className="btn btn-sm btn-success mt-2"
          type="submit"
          value="Upload"
        />
      </form>
    </>
  );
}

export default App;
