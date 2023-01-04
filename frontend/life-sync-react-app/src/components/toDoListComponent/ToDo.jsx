import React from 'react';

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      className={todo.complete ? 'strike' : 'todo'}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
