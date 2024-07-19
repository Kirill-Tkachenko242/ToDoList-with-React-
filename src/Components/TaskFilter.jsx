import React, { useEffect } from 'react';

const styles = {
  filterContainer: {
    marginBottom: '20px',
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
};

const applyStyles = (element, style) => {
  Object.assign(element.style, style);
};

const TaskFilter = ({ filter, setFilter }) => {
  useEffect(() => {
    applyStyles(document.querySelector('#taskFilter'), styles.select);
    applyStyles(document.querySelector('.filter-container'), styles.filterContainer);
  }, []);

  return (
    <div className="filter-container">
      <select value={filter} onChange={(e) => setFilter(e.target.value)} id="taskFilter">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilter;
