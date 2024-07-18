import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

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
        placeholder="Enter a new task"
        id="taskNameInput"
      />
      <button type="submit" id="addTaskButton">+</button>
    </form>
  );
};

export default TaskForm;
