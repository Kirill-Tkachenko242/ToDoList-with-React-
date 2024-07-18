import React, {useMemo, useState} from 'react';
import TaskContext from './TaskContext';

const TaskProvider = (children) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTask = (taskName) => {
        setTasks([...tasks, { name: taskName, completed: false }]);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => {
            if (filter === 'active') return !task.completed;
            if (filter === 'complited') return task.completed;
        });
    }, [tasks, filter]);

    const contextValue = useMemo(() => ({
        tasks: filteredTasks,
        addTask,
        deleteTask,
        toggleTaskCompletion,
        filter,
        setFilter,
    }), [filteredTasks, filter]);

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    );
};


export default TaskProvider;