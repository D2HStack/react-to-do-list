import React, { useState } from "react";
import "./style.css";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  let taskList = [];
  taskList = tasks.map((task, index) => {
    return <Task index={index} tasks={tasks} setTasks={setTasks}></Task>;
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <hr></hr>
      <div>{taskList}</div>
      <div>
        <hr></hr>
        <input
          placeholder="new task"
          value={taskInput}
          onChange={event => {
            setTaskInput(event.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            const tasksCopy = [...tasks];
            tasksCopy.push(taskInput);
            setTasks(tasksCopy);
            setTaskInput("");
          }}
        >
          Add task
        </button>
      </div>
      <p>Made with React at le Reacteur by Hoang</p>
    </div>
  );
}

export default App;
