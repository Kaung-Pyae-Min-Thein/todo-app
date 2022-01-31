import { useState } from "react";
import { MdDelete } from "react-icons/md";

export const Item = ({ title, desc, id, deleteTodo }) => {
  const [expand, setExpand] = useState(true);
  const deleteHandler = () => {
    deleteTodo(id);
  };

  const expandHandler = () => {
    setExpand(!expand);
  };
  return (
    <div>
      <div onClick={expandHandler}>
        <label>{title}</label>
        <button onClick={deleteHandler}>
          <MdDelete />
        </button>
      </div>
      <div className={expand ? "expand" : null}>{desc}</div>
    </div>
  );
};
