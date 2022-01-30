import { useState } from "react";
import { AddButton, InputForm } from "../../components";
import { Todo_style } from "./pagestyle";

export const TodoPage = () => {
  // const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    setTodos((prevTodos) => {
      return [...prevTodos, input];
    });
  };
  console.log(todos);
  return (
    <Todo_style>
      <h1>Todo App</h1>
      <AddButton />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.todo}</li>
        ))}
      </ul>

      <InputForm addTodo={addTodo} />
    </Todo_style>
  );
};
