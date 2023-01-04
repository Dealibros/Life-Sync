import React from 'react';

const ToDo = ({ toDo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <>
      <div
        id={toDo.toDoId}
        className={toDo.complete ? 'strike' : 'todo'}
        key={toDo.toDoId}
        name="todo"
        value={toDo.id}
        onClick={handleClick}
      >
        {/* <button className="toDo-button" onClick={()=>click}> */}
        {toDo.toDo}
        {toDo.complete}
        {/* </button> */}
      </div>
    </>
  );
};

export default ToDo;
