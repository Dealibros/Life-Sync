import './styles.css';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import data from '../../data.json';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

export default function TodoListComponent(props) {
  const nodeRef = React.useRef(null);
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <CSSTransition
      in={props.showToDoList}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div
        className={`new-event-modal-todo ${
          props.showToDoList ? 'showToDoList' : ''
        }}`}
        onClick={props.onClose}
        ref={nodeRef}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="toDo-component">
            <div className="close-toDo-div">
              <button className="close-toDo-button" onClick={props.onClose}>
                x
              </button>
            </div>

            <header className="toDo-header">
              <h1>To Do List</h1>
            </header>
            <ToDoForm addTask={addTask} />

            <div className="tasks-div">
              {toDoList.map((todo) => {
                return (
                  <ToDo
                    key={todo.id}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleFilter={handleFilter}
                  />
                );
              })}
              <button className="clear-tasks-button" onClick={handleFilter}>
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
