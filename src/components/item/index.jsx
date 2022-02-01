import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Item_Style } from "./itemstyles";

export const Item = ({ title, desc, id, deleteTodo }) => {
  const [expand, setExpand] = useState(true);
  const deleteHandler = () => {
    deleteTodo(id);
  };

  const expandHandler = () => {
    setExpand(!expand);
  };
  return (
    <Item_Style>
      <div onClick={expandHandler} className="title">
        <label>{title}</label>
        <button onClick={deleteHandler}>
          <MdDelete />
        </button>
      </div>
      <div className={expand ? "expand" : null}>{desc}</div>
    </Item_Style>
  );
};
