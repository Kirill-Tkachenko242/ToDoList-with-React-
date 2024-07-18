import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
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
