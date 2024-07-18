import React from 'react';

const TaskItem = ({ task, index, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task" style={styles.task}>
      <label>
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
        />
        <span className="checkmark"></span>
        <p className="task-name" style={styles.taskName}>{task.name}</p>
      </label>
      <button type="button" className="deleteButton" style={styles.deleteButton} onClick={() => deleteTask(index)}>x</button>
    </div>
  );
};

const styles = {
  task: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #eee'
  },
  taskName: {
    flex: '1',
    margin: '0 10px',
    color: '#333',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  deleteButton: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#dc3545',
    cursor: 'pointer'
  }
};

export default TaskItem;
