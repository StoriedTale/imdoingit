// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
    const [tasks, setTasks] = useState([
        { text: 'Buy groceries', completed: false, points: 5 },
        { text: 'Walk the dog', completed: false, points: 10 },
        { text: 'Read a book', completed: false, points: 15 },
    ]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]); // Add the new task object directly
    };

    const toggleTaskCompletion = (index) => {
        setTasks(tasks.map((task, i) => (
            i === index ? { ...task, completed: !task.completed } : task
        )));
    };

    const calculateTotalPoints = () => {
        return tasks.reduce((total, task) => (
            task.completed ? total + task.points : total
        ), 0);
    };

    return (
        <div className="App">
            <h1>ImDoingIt</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} />
            <h3>Total Points: {calculateTotalPoints()}</h3>
        </div>
    );
}

export default App;