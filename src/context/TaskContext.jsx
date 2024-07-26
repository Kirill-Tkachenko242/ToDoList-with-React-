import React, { createContext, useState } from 'react';

// Создание контекста TaskContext, который будет использоваться для предоставления данных задач
export const TaskContext = createContext();

// TaskProvider компонент, который оборачивает дочерние компоненты и предоставляет контекст задач
export const TaskProvider = ({ children }) => {
  // Состояние для хранения задач
  const [tasks, setTasks] = useState([]);
  // Состояние для фильтрации задач
  const [filter, setFilter] = useState('all');

  // Функция для добавления новой задачи
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  // Функция для переключения состояния выполнения задачи
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Функция для удаления задачи
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Функция для фильтрации задач в зависимости от текущего фильтра
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'active') {
      return !task.completed;
    }
    return true;
  });

  // Возвращаем TaskContext.Provider, предоставляя значения и функции для управления задачами
  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask, filter, setFilter, filteredTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
