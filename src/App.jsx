import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import TaskFilter from './Components/TaskFilter';

const styles = {
  body: {
    margin: '0',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  appContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginRight: '10px',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  filterContainer: {
    marginBottom: '20px',
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  taskListContainer: {
    marginTop: '20px',
  },
  taskItemContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  checkbox: {
    marginRight: '10px',
  },
  taskTitle: {
    flex: '1',
  },
  taskTitleCompleted: {
    textDecoration: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    color: 'red',
    cursor: 'pointer',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    applyStyles(document.body, styles.body);
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
