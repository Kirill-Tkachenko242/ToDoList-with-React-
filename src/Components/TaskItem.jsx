import React from 'react';

const TaskItem = ({ task, index, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task" style={styles.task}>
      <label style={styles.label}>
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
          style={styles.checkbox}
        />
        <span className="checkmark" style={styles.checkmark}></span>
        <p className="task-name" style={styles.taskName}>{task.name}</p>
      </label>
      <button
        type="button"
        className="deleteButton"
        style={styles.deleteButton}
        onClick={() => deleteTask(index)}
      >
        -
      </button>
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
  label: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    overflow: 'hidden'
  },
  checkbox: {
    display: 'inline-block',
    padding: '5px',
    border: '1px solid black',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    BackgroundColor: 'white'
  },
  checkmark: {
    display: 'none'
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
    cursor: 'pointer',
    sise: '90px'
  }
};

export default TaskItem;
