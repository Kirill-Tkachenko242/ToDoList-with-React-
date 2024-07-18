import React, {useContext} from 'react';
import TaskItem from './TaskItem';
import TaskContext from '../context/TaskContext';

const TaskList = () => {
    const {tasks} = useContext(TaskContext)
    return (
        <div id="taskList">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    index={index}
                    task={task}
                />
            ))}
        </div>
    );
};

export default TaskList;
