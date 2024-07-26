import React, { useState, useEffect, useContext } from 'react'; // Импортируем необходимые хуки из React
import { TaskContext } from '../context/TaskContext'; // Импортируем контекст задач

// Определяем стили для компонентов
const styles = {
  form: {
    display: 'flex',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
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
    backgroundColor: 'rgb(210, 36, 60)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px', // Увеличим размер текста на кнопке
  },
};

// Функция для применения стилей к элементу
const applyStyles = (element, style) => {
  Object.assign(element.style, style); // Применяем переданные стили к указанному элементу
};

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState(''); // Создаем состояние для названия задачи
  const { addTask } = useContext(TaskContext); // Получаем функцию addTask из контекста задач

  // Применяем стили к элементам после монтирования компонента
  useEffect(() => {
    applyStyles(document.querySelector('.addTaskForm'), styles.form);
    applyStyles(document.querySelector('.taskNameInput'), styles.input);
    applyStyles(document.querySelector('.addTaskButton'), styles.button);
  }, []);

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    if (taskTitle.trim()) { // Проверяем, что название задачи не пустое
      addTask({ title: taskTitle }); // Добавляем задачу
      setTaskTitle(''); // Очищаем поле ввода
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addTaskForm">
      <input
        type="text"
        value={taskTitle} // Связываем значение поля ввода с состоянием taskTitle
        onChange={(e) => setTaskTitle(e.target.value)} // Обновляем состояние при изменении ввода
        placeholder="Добавьте задачу"
        className="taskNameInput" // Класс для поля ввода
      />
      <button type="submit" className="addTaskButton">+</button> {/* Кнопка для отправки формы */}
    </form>
  );
};

export default TaskForm; // Экспортируем компонент TaskForm по умолчанию
