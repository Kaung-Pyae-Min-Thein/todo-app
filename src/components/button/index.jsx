import * as MaterialDesign from "react-icons/md";

export const Button = ({ text, icon }) => {
  // const md = MaterialDesign.[MdAdd];
  let mdicon;

  if (icon === "add") {
    mdicon = <MaterialDesign.MdAdd />;
  } else if (icon === "delete") {
    mdicon = <MaterialDesign.MdDelete />;
  }

  return (
    <button>
      {mdicon}
      {text}
    </button>

    // {!icon || icon !== "" ?  <button>mdicon</button> : null}
  );
};
