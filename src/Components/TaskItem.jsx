
import React, { useEffect } from 'react';

const styles = {
  taskItemContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontFamily: 'Futuris C',
  },
  checkbox: {
    marginRight: '10px',
  },
  taskTitle: {
    flex: '1',
    marginRight: '10px', // Добавим отступ справа для кнопки удаления
  },
  taskTitleCompleted: {
    textDecoration: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'rgb(210, 35, 60)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1vw',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  useEffect(() => {
    const taskItemElements = document.querySelectorAll('.task-item-container');
    taskItemElements.forEach((element) => applyStyles(element, styles.taskItemContainer));

    const checkboxElements = document.querySelectorAll('.checkbox');
    checkboxElements.forEach((element) => applyStyles(element, styles.checkbox));

    const taskTitleElements = document.querySelectorAll('.task-title');
    taskTitleElements.forEach((element) => applyStyles(element, styles.taskTitle));

    const deleteButtonElements = document.querySelectorAll('.delete-button');
    deleteButtonElements.forEach((element) => applyStyles(element, styles.deleteButton));
  }, [task]);

  return (
    <div className="task-item-container">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className="checkbox"
      />
      <span className={`task-title ${task.completed ? 'completed' : ''}`}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-button">-</button>
    </div>
  );
};

export default TaskItem;
