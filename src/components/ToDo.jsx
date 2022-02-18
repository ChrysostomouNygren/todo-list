import React, { useState } from "react";

function ToDo(props) {
  const [style, setStyle] = useState(false);

  function handleRemove() {
    const id = props.data.id;
    props.removeTask(id);
  }

  const checkedTask = () => {
      console.log("klickad!");
      setStyle(!style);
    };

  return (
    <div className="task">
      {/* Hitta bra checkmark emoji! */}
      {/* onClick = class = css pls */}
      <input type="checkbox" onClick={checkedTask}/>
      {/* <button className="button" onClick={checkedTask}>✔️</button> */}
      <h2 className={style ? "checked" : "check"}>{props.data.title}</h2>
      {/* Hitta trash emoji! */}
      <button className="button" onClick={handleRemove}>🗑️</button>
    </div>
  );
}

export default ToDo;
