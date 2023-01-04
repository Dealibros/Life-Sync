import React from 'react';

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <>
      <div
        id={todo.toDoId}
        className={todo.complete ? 'strike' : 'todo'}
        key={todo.toDoId}
        name="todo"
        value={todo.id}
        onClick={handleClick}
      >
        {todo.toDo}
      </div>
    </>
  );
};

export default ToDo;
