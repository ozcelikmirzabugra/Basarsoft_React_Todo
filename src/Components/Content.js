import React, { useState } from 'react';

const Content = ({ tasks, addTask, updateTask, deleteTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleTaskAction = () => {
    if (taskInput.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    if (editIndex !== null) {
      updateTask(editIndex, taskInput);
      setEditIndex(null);
    } else {
      addTask(taskInput);
    }
    setTaskInput('');
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setTaskInput(tasks[index]);
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder={editIndex !== null ? "Update task" : "Add a new task"}
      />
      <button onClick={handleTaskAction}>
        {editIndex !== null ? 'Update Task' : 'Add Task'}
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditClick(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
