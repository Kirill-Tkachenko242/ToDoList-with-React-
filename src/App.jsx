import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import TaskFilter from './Components/TaskFilter';

const styles = {
  body: {
    margin: '0',
    fontFamily: 'Times New Roman',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  appContainer: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    applyStyles(document.querySelector('#main'), styles.appContainer);
    applyStyles(document.querySelector('#title'), styles.title);
  }, []);

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
      <section>
        <h1 id="title">ToDo List</h1>
        <TaskForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      </section>
    </div>
  );
};

export default App;
