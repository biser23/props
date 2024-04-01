import React from 'react';

function Task({ task, deleteTask, toggleComplete }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={handleToggleComplete}
      >
        {task.text}
      </span>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default Task;