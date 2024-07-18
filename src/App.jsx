import React, { useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import TaskFilter from './Components/TaskFilter';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'active') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div id="main">
      <section id="task-section">
        <h1 id="title">ToDo List</h1>
        <TaskForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      </section>
    </div>
  );
};

export default App;
