import { useState } from "react";
import { Button, InputForm } from "../../components";
import { Todo_style } from "./pagestyle";

export const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    setTodos((prevTodos) => {
      return [...prevTodos, input];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item, index) => index !== id);
    });
  };
  console.log(todos);
  return (
    <Todo_style>
      <div className="wrapper">
        <h1>Todo App</h1>

        <Button icon="add" />

        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              {item.todo} <Button icon="delete" />
            </li>
          ))}
        </ul>

        <InputForm addTodo={addTodo} />
      </div>
    </Todo_style>
  );
};
