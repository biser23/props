import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Añadir nueva tarea"
      />
      <button type="submit">Añadir tarea</button>
    </form>
  );
}

export default AddTaskForm;