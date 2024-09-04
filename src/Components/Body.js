import React, { useState } from 'react';

function Body({ incrementCounter }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleButtonClick = () => {
    addTask(); // Görev ekleme işlevi
    incrementCounter(); // Sayaç artırma işlevi
  };

  return (
    <main className="body">
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleButtonClick}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </main>
  );
}

export default Body;
