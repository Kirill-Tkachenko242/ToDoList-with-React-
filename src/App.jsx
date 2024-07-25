import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import TaskFilter from './Components/TaskFilter';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import {TaskProvider} from './context/TaskContext';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'space-between', // Равномерное распределение пространства между элементами
    alignItems: 'flex-start',
    padding: '20px',
    height: '20vh',
    fontFamily: 'Futuris C, Times New Roman, Arial, sans-serif',
    paddingTop: '60px',
  },
  formContainer: {
    maxWidth: '400px',
    margin: '20px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  tasksContainer: {
    flex: '1',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    //display: 'flex',
    //justifyContent: 'flex-end', // Расположим задачи справа
  },
  title: {
    textAlign: 'center',
    color: 'rgb(0, 0, 0)',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  useEffect(() => {
    applyStyles(document.querySelector('#main'), styles.main);
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
    <TaskProvider>
      <div>
        <Header onLoginClick={() => setIsLoginFormVisible(true)} />
        {isLoginFormVisible && <LoginForm closeLoginForm={() => setIsLoginFormVisible(false)} />}
        <div id="main">
          <div style={styles.formContainer}>
            <h1 style={styles.title}>ToDo List</h1>
            <TaskForm />
            <TaskFilter />
          </div>
          <div style={styles.tasksContainer}>
            <TaskList tasks={filteredTasks} />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
