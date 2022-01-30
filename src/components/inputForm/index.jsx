import { useState } from "react";

export const InputForm = ({ addTodo }) => {
  const [input, setInput] = useState({
    todo: "",
    description: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    // This can outdated state render
    // setInput({
    //   ...input,
    //   [name]: value,
    // });

    setInput((prevObject) => {
      return { ...prevObject, [name]: value.trim() };
    });

    // setInput((pervObj) => ({ ...pervObj, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput({
      todo: "",
      description: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input.todo}
        onChange={handleChange}
        name="todo"
        placeholder="Add your new todo"
      />

      <textarea
        value={input.description}
        onChange={handleChange}
        name="description"
        placeholder="Description"
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
};
// export const InputForm = () =>{

//   const [todos, setTodos] = useState([])

//   const todosHandler = (event) => {
//     event.preventDefault()
//     let todo = event.target.querySelector(" input[name='todo']").value;
//     let description = event.target.querySelector("textarea[name='desc']").value;

//     setTodos([...todos,{todo, description}])

//     console.log(todos)
//   }
//   return(
//   <>
//   <form onSubmit={todosHandler}>
//     <input type="text" name="todo" placeholder="Add your new todo"/>
//     <textarea placeholder="Description" name="desc"></textarea>
//     <button>Add</button>
//   </form>
//   </>)
// }

// const todoChangeHandler = (event) => {
//   setInput( prevState => {
//     ...prevState,
//     todo: event.target.value,
//   });
// };
// const descChangeHandler = (event) => {
//   setInput(prevState => {
//     ...prevState,
//     description: event.target.value,
//   });
// };
