import './styles.css';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { apiFetch } from '../../apiFetch';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

export default function TodoList(props) {
  const nodeRef = React.useRef(null);
  const [toDoList, setToDoList] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    apiFetch('http://localhost:8080/api/toDos/all', 'GET', null).then(
      (data) => {
        setToDoList(data);
      },
    );
  }, [refresh, setRefresh]);

  const handleToggle = (id) => {
    apiFetch(
      `http://localhost:8080/api/toDos/updateToDo/${id}`,
      'PUT',
      JSON.stringify({id}),
    ).then(() => {
      setRefresh((prevRefresh) => !prevRefresh);
    });
  };


  const deleteToDos = () => {
    apiFetch(
      'http://localhost:8080/api/toDos/deleteToDos',
      'DELETE',
      null,
    ).then(() => {
      setRefresh((prevRefresh) => !prevRefresh);
    });
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
        <div
          className="modal-content-toDo"
          onClick={(e) => e.stopPropagation()}
        >
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
              refresh={refresh}
              setRefresh={setRefresh}
              setToDoList={setToDoList}
              toDoList={toDoList}
            />

            <div className="tasks-div">
              {toDoList.map((toDo) => {
                return (
                  <ToDo
                    key={toDo.toDoId}
                    toDo={toDo}
                    handleToggle={handleToggle}
                  />
                );
              })}

              <button className="clear-tasks-button" onClick={deleteToDos}>
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
