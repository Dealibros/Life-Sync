import './styles.css';
import React, { useState } from 'react';
import { apiFetch } from '../../apiFetch';

const ToDoForm = ({ setRefresh }) => {
  const [userInput, setUserInput] = useState('');

  const createToDo = (event) => {
    event.preventDefault();
    apiFetch(
      'http://localhost:8080/api/toDos/newToDo',
      'POST',
      JSON.stringify(userInput),
    );
    setRefresh(userInput);
    setUserInput('');
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <button className="task-button" onClick={(event) => createToDo(event)}>
        Submit
      </button>
    </form>
  );
};

export default ToDoForm;
