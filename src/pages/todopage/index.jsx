import { useState } from "react";
import { InputForm, Item } from "../../components";
import { Todo_style } from "./pagestyle";
import { MdAdd } from "react-icons/md";

export const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  //state for form handler
  const [showForm, setShowForm] = useState(false);

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

  const showFormHandler = (formDecision) => {
    setShowForm(!formDecision);
  };

  return (
    <Todo_style>
      <div className="wrapper">
        <h1>Todo App</h1>
        <button className="showForm" onClick={() => showFormHandler(showForm)}>
          <MdAdd />
        </button>

        {todos.map((item, index) => (
          <Item
            key={index}
            title={item.todo}
            desc={item.description}
            id={index}
            deleteTodo={deleteTodo}
          />
        ))}

        <InputForm
          addTodo={addTodo}
          // have to chg state after
          showForm={showForm}
          showFormHandler={showFormHandler}
        />
      </div>
    </Todo_style>
  );
};
{
  /* <Button icon="add" onClick={addFormHandler} /> */
}
