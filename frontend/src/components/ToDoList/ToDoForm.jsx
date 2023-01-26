import './styles.css';
import React, { useState } from 'react';
import { apiFetch } from '../../apiFetch';

const ToDoForm = ({ setRefresh }) => {

  const [toDo, setToDo] = useState('');


  const createToDo = (event) => {
    event.preventDefault();

    apiFetch(
      'http://localhost:8080/api/toDos/newToDo',
      'POST',
      JSON.stringify({toDo}),
    );
    setRefresh(toDo);
    setToDo('');
  };

  console.log(toDo)
  console.log(JSON.stringify({toDo}))

  const handleChange = (e) => {
    setToDo(e.currentTarget.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setToDo('');
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        value={toDo}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button className="task-button" name="toDo" onClick={(event) => createToDo(event)}>
        Submit
      </button>
    </form>
  );
};

export default ToDoForm;
