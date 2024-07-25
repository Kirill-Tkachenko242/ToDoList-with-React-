
import React, { useEffect, useContext } from 'react';
import TaskItem from './TaskItem';
import {TaskContext} from '../context/TaskContext';

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

const TaskList = ({ tasks }) => {
  const {filteredTasks, toggleTaskCompletion, deleteTask} = useContext(TaskContext);

  useEffect(() => {
    applyStyles(document.querySelector('.task-list-container'), styles.taskListContainer);
  }, []);

  return (
    <div className="task-list-container">
      {filteredTasks.map(task => (
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
