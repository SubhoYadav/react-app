import React, { useState } from "react";

export default function TodDo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setInputTodo] = useState("");
  function addTodo() {
    setTodos([...todos, todoInput]);
  }
  return (
    <div className="container">
      <h3>Todo Application</h3>
      <div className="row border p-4">
        <div className="col-6 ">
          <h6>Add New</h6>

          <input
            type="text"
            className="form-input"
            value={todoInput}
            onChange={(event) => setInputTodo(event.target.value)}
          />
          <br />
          <button className="btn btn-sm btn-success mt-4" onClick={addTodo}>
            Add Todo
          </button>
        </div>
        <div className="col-6 border p-4">
          <h6>Todos</h6>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={"todo" + index} style={{ listStyle: "none" }}>
                  {todo}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
