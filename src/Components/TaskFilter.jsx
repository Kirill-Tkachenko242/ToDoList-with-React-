import React from 'react';

const TaskFilter = ({ setFilter }) => {
  return (
    <select id="taskFilter" style={styles.select} onChange={(e) => setFilter(e.target.value)}>
      <option value="all">Все</option>
      <option value="active">Активные</option>
      <option value="completed">Выполненные</option>
    </select>
  );
};

const styles = {
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '20px'
  }
};

export default TaskFilter;
