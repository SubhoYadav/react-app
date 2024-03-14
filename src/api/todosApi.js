import todosApi from "./axios";

const getTodos = async () => {
  try {
    const response = await todosApi.get("/todos");
    return response.data;
  } catch (err) {
    console.error("Err in getTodos", err);
  }
};

const addTodo = async (todo) => {
  const response = await todosApi.post("/todos", todo);
  return response.data;
};

const updateTodo = async (todo) => {
  const response = await todosApi.patch(`/todos/${todo.id}`, todo);
  return response.data;
};

const deleteTodo = async ({ id }) => {
  const response = await todosApi.delete(`/todos/${id}`);
  return response.data;
};

export { getTodos, addTodo, updateTodo, deleteTodo };
