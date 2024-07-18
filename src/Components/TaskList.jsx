import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-list-container">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
