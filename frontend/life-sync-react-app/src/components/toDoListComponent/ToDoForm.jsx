import './styles.css';
import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button className="task-button">Submit</button>
    </form>
  );
};

export default ToDoForm;
