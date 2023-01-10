import './styles.css';
import React, {useState} from 'react';

const ToDoForm = ({setRefresh}) => {
    const [userInput, setUserInput] = useState('');

    const createToDo = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/toDos/newToDo', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(userInput),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setRefresh(userInput);
                setUserInput('');
            })
            .catch((error) => {
                console.log('error!', error);
            });
    };

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInput('');
    };
    return (<form className="task-form" onSubmit={handleSubmit}>
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
        </form>);
};

export default ToDoForm;
