import React, {useContext} from 'react';
import TaskContext from '../context/TaskContext';

const TaskFilter = () => {
  const {setFilter} = useContext(TaskContext);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select id="taskFilter" style={styles.select} onChange={handleChange}>
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
