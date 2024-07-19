import React, { useState, useEffect } from 'react';

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
    backgroundColor: '#ddd',
    color: 'black',
    cursor: 'pointer',
    border: '1px solid black',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    applyStyles(document.querySelector('#addTaskForm'), styles.form);
    applyStyles(document.querySelector('#taskNameInput'), styles.input);
    applyStyles(document.querySelector('#addTaskButton'), styles.button);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ title: taskTitle });
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="addTaskForm">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Добавьте задачу"
        id="taskNameInput"
      />
      <button type="submit" id="addTaskButton">+</button>
    </form>
  );
};

export default TaskForm;
