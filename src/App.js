import "./App.css";
import React, { useState } from "react";
import InputBox from "./components/InputBox";
import ToDoList from "./components/ToDoList";


function App() {
  const [tasks, setTasks] = useState([]);


  function addTask(title) {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        { id: Math.random().toString(), title: title},
      ];
    });
  }


  function removeTask(id) {
    const newTask = [...tasks].filter(
      (task) => task.id !== id
    );
    setTasks(newTask);
  }
  



  return (
    <div className="App">
      <h1>ToDo:</h1>

      <InputBox add={addTask} />

      <ToDoList
        tasks={tasks}
        removeTask={removeTask}

      />
    </div>
  );
}


export default App;
