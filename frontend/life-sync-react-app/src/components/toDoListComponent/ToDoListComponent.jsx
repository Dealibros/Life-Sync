import './styles.css';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

export default function TodoListComponent(props) {
  const nodeRef = React.useRef(null);
  const [toDoList, setToDoList] = useState([]);
  const [refresh, setRefresh] = useState(' ');

  const handleToggle = (id) => {
    console.log(id);
    fetch(`http://localhost:8080/api/toDos/updateToDo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRefresh(toDoList);
      })
      .catch((error) => {
        console.log('error!', error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/toDos/all`)
      .then((response) => response.json())
      .then((data) => {
        setToDoList(data);
      });
  }, [setRefresh, refresh]);

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

  if (!toDoList.length) return <h3>" "</h3>;

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
            <ToDoForm
              addTask={addTask}
              refresh={refresh}
              setRefresh={setRefresh}
            />

            <div className="tasks-div">
              {toDoList.map((toDo) => {
                return (
                  <ToDo
                    key={toDo.toDoId}
                    toDo={toDo}
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
