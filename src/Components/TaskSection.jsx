import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const TaskSection = () => {
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

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return tasks.completed;
        return true;
    });

    return (
        <section id="task-section" style={styles.section}>
            <p id="title" style={styles.title}>ToDo List</p>
            <TaskForm addTask={addTask} />
            <TaskFilter setFilter={setFilter} />
            <TaskList
                tasks={filteredTasks}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </section>
    );
};

const styles = {
    section: {
        width: '300px',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        color: '#333',
    },
};

export default TaskSection;
