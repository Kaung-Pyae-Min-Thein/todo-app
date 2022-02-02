import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Item_Style } from "./itemstyles";

export const Item = ({ title, desc, id, deleteTodo }) => {
  const [expand, setExpand] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const deleteHandler = () => {
    deleteTodo(id);
  };

  const expandHandler = () => {
    setExpand(!expand);
  };

  const hoverHandler = () => {
    setShowButton(!showButton);
  };
  return (
    <Item_Style
      onClick={expandHandler}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <div className="title">
        <label>{title}</label>
        <button onClick={deleteHandler} className={showButton && "active"}>
          <MdDelete />
        </button>
      </div>
      <div className={`description ${expand && "expand"}`}>{desc}</div>
    </Item_Style>
  );
};
