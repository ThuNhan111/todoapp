import React, { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Quản lý danh sách công việc</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Thêm công việc mới"
            />
            <button onClick={addTask}>Thêm</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                        <button onClick={() => toggleTaskCompletion(task.id)}>
                            {task.completed ? 'Chưa hoàn thành' : 'Hoàn thành'}
                        </button>
                        <button onClick={() => deleteTask(task.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;