import React, { useState, useEffect } from 'react';

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    borderRadius: '8px',
  },
  input: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '10px',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'rgb(210, 36, 60)',
    color: 'white',
    cursor: 'pointer',

  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

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
