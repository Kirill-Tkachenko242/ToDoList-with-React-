import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const TaskSection = () => {
    return (
        <section id="task-section" style={styles.section}>
            <p id="title" style={styles.title}>ToDo List</p>
            <TaskForm />
            <TaskFilter />
            <TaskList />
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
