import React, { useEffect, useContext } from 'react'; // Импортируем необходимые хуки из React
import { TaskContext } from '../context/TaskContext'; // Импортируем контекст задач

// Определяем стили для компонентов
const styles = {
  taskItemContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Futuris C',
  },
  checkboxContainer: {
    position: 'relative',
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  checkbox: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    width: '24px',
    height: '24px',
    zIndex: 1,
  },
  taskTitle: {
    flex: '1',
    marginRight: '10px', // Добавим отступ справа для кнопки удаления
  },
  deleteButton: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'rgb(210, 35, 60)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px', // Увеличим размер текста на кнопке
  },
  customCheckbox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '2px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, border-color 0.3s',
  },
  checked: {
    backgroundColor: 'rgb(210, 35, 60)',
    border: '2px solid rgb(210, 35, 60)',
  },
  checkmark: {
    color: '#fff',
    fontSize: '16px',
  },
};

// Функция для применения стилей к элементу
const applyStyles = (element, style) => {
  Object.assign(element.style, style); // Применяем переданные стили к указанному элементу
};

const TaskItem = ({ task }) => {
  // Получаем функции из контекста задач
  const { toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  // Применяем стили к элементам после монтирования компонента
  useEffect(() => {
    const taskItemElements = document.querySelectorAll('.task-item-container');
    taskItemElements.forEach((element) => applyStyles(element, styles.taskItemContainer));

    const checkboxElements = document.querySelectorAll('.checkbox');
    checkboxElements.forEach((element) => applyStyles(element, styles.checkbox));

    const taskTitleElements = document.querySelectorAll('.task-title');
    taskTitleElements.forEach((element) => applyStyles(element, styles.taskTitle));

    const deleteButtonElements = document.querySelectorAll('.delete-button');
    deleteButtonElements.forEach((element) => applyStyles(element, styles.deleteButton));
  }, [task]); // Зависимость от task, чтобы хук выполнялся при изменении задачи

  return (
    <div className="task-item-container">
      <div className="checkboxContainer" style={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)} // Обработчик изменения состояния чекбокса
          className="checkbox"
        />
        <div style={{ ...styles.customCheckbox, ...(task.completed && styles.checked) }}>
          {task.completed && <span style={styles.checkmark}>✔</span>} {/* Отображаем галочку, если задача выполнена */}
        </div>
      </div>
      <span className={`task-title ${task.completed ? 'completed' : ''}`}>
        {task.title} {/* Отображаем заголовок задачи */}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-button">-</button> {/* Кнопка для удаления задачи */}
    </div>
  );
};

export default TaskItem; // Экспортируем компонент TaskItem по умолчанию
