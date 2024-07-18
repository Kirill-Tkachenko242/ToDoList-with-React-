import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const {addTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form id="addTaskForm" style={styles.form} onSubmit={handleSubmit}>
      <input
        id="taskNameInput"
        type="text"
        placeholder="Добавить задачу"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={styles.input}
      />
      <button id="submit" type="submit" style={styles.button}>+</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    marginBottom: '10px'
  },
  input: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px'
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default TaskForm;
