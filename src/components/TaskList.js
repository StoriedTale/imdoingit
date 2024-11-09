// src/components/TaskList.js
import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onToggleTask }) => {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`task-item ${task.completed ? 'completed' : ''}`}
                        onClick={() => onToggleTask(index)}
                    >
                        [{task.points}] {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;