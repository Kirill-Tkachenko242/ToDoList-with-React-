import React, { useState, useEffect, useContext } from 'react';
import {TaskContext} from '../context/TaskContext'

const styles = {
  form: {
    display: 'flex',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadows: '0 0 10px rgba(0, 0, 0, 0.1)'
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
    fontSize: '1vw',
    fontSize: '20px', // Увеличим размер текста на кнопке
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  useEffect(() => {
    applyStyles(document.querySelector('.addTaskForm'), styles.form);
    applyStyles(document.querySelector('.taskNameInput'), styles.input);
    applyStyles(document.querySelector('.addTaskButton'), styles.button);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ title: taskTitle });
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addTaskForm">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Добавьте задачу"
        className="taskNameInput"
      />
      <button type="submit" className="addTaskButton">+</button>
    </form>
  );
};

export default TaskForm;
