import axios from "axios";

const todosApi = axios.create({
  baseURL: "http://localhost:3500",
  // baseURL: "https://jsonplaceholder.typicode.com",
});

export default todosApi;
