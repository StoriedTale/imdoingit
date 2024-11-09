// src/components/AddTask.js
import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ onAddTask }) => {
    const [task, setTask] = useState(''); // Track the task name
    const [points, setPoints] = useState(5); // Track the points value with a default

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handlePointsChange = (e) => {
        setPoints(parseInt(e.target.value) || 0); // Ensure points is an integer
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask({ text: task, completed: false, points }); // Pass an object with task details
            setTask('');
            setPoints(5); // Reset to default
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={handleTaskChange}
                placeholder="Enter a new task"
                className="task-input"
            />
            <input
                type="number"
                value={points}
                onChange={handlePointsChange}
                placeholder="Points"
                className="points-input"
                min="0"
            />
            <button type="submit" className="add-task-button">Add Task</button>
        </form>
    );
};

export default AddTask;