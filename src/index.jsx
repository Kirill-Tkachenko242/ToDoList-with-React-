import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Импортируем главный компонент приложения App
import { TaskProvider } from './context/TaskContext'; // Импортируем провайдер контекста TaskProvider

// Оборачиваем App компонент в TaskProvider, чтобы предоставить контекст задач всему приложению
ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root') // Рендерим приложение в элемент с id 'root'
);
