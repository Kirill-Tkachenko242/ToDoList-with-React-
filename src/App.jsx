import React, { useState, useEffect, useContext } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import TaskFilter from './Components/TaskFilter';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import { TaskProvider, TaskContext } from './context/TaskContext';

// Определение стилей для компонентов
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
  },
  title: {
    textAlign: 'center',
    color: 'rgb(0, 0, 0)',
  },
};

// Функция для применения стилей к элементам
const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const App = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const { tasks, filter } = useContext(TaskContext); // Используем контекст для получения задач и фильтра

  useEffect(() => {
    applyStyles(document.querySelector('#main'), styles.main);
  }, []);

  // Фильтрация задач в зависимости от выбранного фильтра
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
        <Header onLoginClick={() => setIsLoginFormVisible(true)} /> {/* Заголовок с кнопкой для отображения формы входа */}
        {isLoginFormVisible && <LoginForm closeLoginForm={() => setIsLoginFormVisible(false)} />} {/* Форма входа */}
        <div id="main">
          <div style={styles.formContainer}>
            <h1 style={styles.title}>ToDo List</h1>
            <TaskForm /> {/* Форма для добавления новых задач */}
            <TaskFilter /> {/* Фильтр для задач */}
          </div>
          <div style={styles.tasksContainer}>
            <TaskList tasks={filteredTasks} /> {/* Список задач */}
          </div>
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
