import React, { useState } from "react";

function Task(props) {
  const [completed, setCompleted] = useState(false);
  const { index, tasks, setTasks } = props;

  return (
    <>
      <div key={tasks[index]}>
        <input
          id={tasks[index]}
          type="checkbox"
          onClick={() => {
            let checkBox = document.getElementById(tasks[index]);
            setCompleted(checkBox.checked);
          }}
        ></input>
        <span className={completed ? "underlined" : ""}>{tasks[index]}</span>
        <button
          onClick={() => {
            const tasksCopy = [...tasks];
            console.log(tasksCopy);
            const indexToDelete = tasksCopy.indexOf(tasks[index]);
            console.log(indexToDelete);
            tasksCopy.splice(indexToDelete, indexToDelete + 1);
            console.log(tasksCopy);
            setTasks(tasksCopy);
          }}
        >
          Bin
        </button>
      </div>
    </>
  );
}

export default Task;
