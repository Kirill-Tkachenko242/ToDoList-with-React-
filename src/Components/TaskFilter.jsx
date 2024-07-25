import React, { useEffect, useContext } from 'react';
import {TaskContext} from '../context/TaskContext'

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

const TaskFilter = () => {
  const {filter, setFilter} = useContext(TaskContext);

  useEffect(() => {
    applyStyles(document.querySelector('.taskFilter'), styles.select);
    applyStyles(document.querySelector('.filter-container'), styles.filterContainer);
  }, []);

  return (
    <div className="filter-container">
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="taskFilter">
        <option value="all">Все</option>
        <option value="active">Активные</option>
        <option value="completed">Выполненные</option>
      </select>
    </div>
  );
};

export default TaskFilter;
