import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    index={index}
                    task={task}
                    deleteTask={() => deleteTask(index)}
                    toggleTaskCompletion={() => toggleTaskCompletion(index)}
                />
            ))}
        </div>
    );
};

export default TaskList;
