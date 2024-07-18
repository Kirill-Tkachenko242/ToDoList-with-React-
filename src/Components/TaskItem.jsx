import React from 'react';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
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
      <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
    </div>
  );
};

export default TaskItem;
