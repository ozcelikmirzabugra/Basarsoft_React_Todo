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
      updateTask(editIndex, { ...tasks[editIndex], name: taskInput });
      setEditIndex(null);
    } else {
      addTask({ name: taskInput });
    }
    setTaskInput('');
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setTaskInput(tasks[index].name);
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
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index}> {/* Uniqe key olarak id kullanıldı */}
              {task.name}
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No tasks available.</li>
        )}
      </ul>
    </div>
  );
};

export default Content;
