import React, { useState } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { postData, deleteData, patchData } from './Request';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
    setCount(count + 1);
  
    postData('http://localhost:5275/api/HomeControllerTodoApp/', task)
      .then(response => console.log('Task successfully added:', response))
      .catch(error => console.error('Error adding task:', error));
  };
  


  const updateTask = (index, updatedTask) => {
    // Eğer updatedTask içinde id yoksa, hata mesajı ver
    if (!updatedTask.id) {
      console.error('Task ID is missing from updatedTask');
      return;
    }
  
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  
    // ID'yi al ve güncelle
    const id = updatedTask.id;
  
    patchData(`http://localhost:5275/api/HomeControllerTodoApp/${id}`, updatedTask)
      .then((response) => {
        console.log('Task updated', response);
      })
      .catch((error) => {
        console.error('Error while updating task', error);
      });
  };
  
  
  


  const deleteTask = (index) => {
    const id = tasks[index].id;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCount(count - 1);
  
    deleteData(`http://localhost:5275/api/HomeControllerTodoApp/${id}`)
      .then(response => console.log('Task deleted:', response))
      .catch(error => console.error('Error while deleting:', error));
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