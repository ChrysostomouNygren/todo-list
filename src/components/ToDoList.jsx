import React from "react";
import ToDo from "./ToDo";

function ToDoList(props) {
  return (
    <div className="list-area">
      {props.tasks.map((task) => {
        return (
          <ToDo
            key={task.id}
            data={task}
            removeTask={props.removeTask}
            markDayAsDone={props.markDayAsDone}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;
