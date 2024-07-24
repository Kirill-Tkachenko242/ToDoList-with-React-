import React, { useEffect } from 'react';
import TaskItem from './TaskItem';

const styles = {
  taskListContainer: {
    //width: '100%', // Установим ширину на 100% для лучшего выравнивания
    marginTop: '20px',
    //display: 'flex',
    flexDirection: 'column',
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
