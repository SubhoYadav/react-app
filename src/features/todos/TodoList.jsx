import React from "react";

import { useQueryClient, useQuery, useMutation } from "react-query";
import { getTodos, updateTodo, addTodo, deleteTodo } from "../../api/todosApi";
import { useState } from "react";

export default function TodoList() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) =>
      data.sort((a, b) => {
        return b.id - a.id;
        // returnVal > 0 => sort a after b [b,a]
        // returnVal < 0 => sort b after a [a,b]
        // returnVal == 0 => retain the actual positions of a and b
      }),
  }); // todos is the name of the cache

  // updateTodo mutation
  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidate the current cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  // addTodo mutation
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate the current cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  // deleteTodo mutation
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidate the current cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addTodoMutation.mutate({
      user_id: 1,
      title: todo,
      completed: false,
    });
    setTodo("");
  };
  const [todo, setTodo] = useState("");
  const addTodoForm = (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todos">Add a new todo</label>
      &nbsp;
      <input
        type="text"
        id="todos"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      &nbsp;
      <button type="submit"> Add</button>
    </form>
  );

  let content = null;
  if (isLoading) {
    content = <p>Loading ...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = <p>{JSON.stringify(todos)}</p>;
  }
  return (
    <div>
      {addTodoForm}
      {content}
    </div>
  );
}
