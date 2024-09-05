import React, { useState } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setCount(count + 1);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCount(count - 1);
  };

  return (
    <div>
      <Header count={count} />
      <Content
        tasks={tasks}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <Footer />
    </div>
  );
};

export default App;
