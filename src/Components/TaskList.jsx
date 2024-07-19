import React, { useEffect } from 'react';
import TaskItem from './TaskItem';

const styles = {
  taskListContainer: {
    marginTop: '20px',
  },
};

const applyStyles = (element, style) => {
    Object.assign(element.style, style);
};

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  useEffect(() => {
    applyStyles(document.querySelector('.task-list-container'), styles.taskListContainer);
  }, []);

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
