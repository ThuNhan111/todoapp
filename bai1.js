import React, { useState } from 'react';
function ToDoApp() {
const [tasks, setTasks] = useState([]); // Quản lý danh sách công việc
const [newTask, setNewTask] = useState(''); // Quản lý giá trị ô nhập liệu
const handleAddTask = (e) => {
e.preventDefault();
if (newTask.trim() !== '') {
setTasks([...tasks, { task: newTask, completed: false }]);
setNewTask('');
}  };
return (
<div>
<h1>To-Do List</h1>
<form onSubmit={handleAddTask}>
<input
type="text"
placeholder="Enter new task"
value={newTask}
onChange={(e) =>
setNewTask(e.target.value)}
/>        <button type="submit">THÊM</button>
</form>
{/* Hiển thị danh sách công việc */}    </div>
);}
export default ToDoApp;