import './styles.css';
import React, { useState } from 'react';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';
import { CSSTransition } from 'react-transition-group';
import { apiFetch } from '../../../apiFetch';
import { days } from '../../../utils/days';

const NEW_HABIT_DEFAULT = {
  title: null,
  description: null,
  habits: null,
  starred: false,
};

const NewHabitForm = (props) => {
  const nodeRef = React.useRef(null);
  const [newHabit, setNewHabit] = useState({ ...NEW_HABIT_DEFAULT });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [dailyHabitEntries, setdailyHabitEntries] = useState(days);

  const createHabit = (event) => {
    handleId();
    event.preventDefault();
    apiFetch(
      'http://localhost:8080/api/habits/newHabit',
      'POST',
      JSON.stringify(newHabit),
    ).then(
      setdailyHabitEntries(days),
      setFavourite(false),
      setNewHabit({ ...newHabit, starred: false }),
    );
    const habitAdded = props.habits.push(newHabit);

    props.onClose();
  };

  const handleTitle = (value) => setNewHabit({ ...newHabit, title: value });

  const handleDescription = (value) => {
    setNewHabit({ ...newHabit, description: value, habits: dailyHabitEntries });
    setdailyHabitEntries(days);
  };

  const handleId = () => {
    dailyHabitEntries.map((entry) => {
      entry.id = `${entry.id}${props.habits.length}`;
    });
    setNewHabit({ ...newHabit, habits: dailyHabitEntries });
    setdailyHabitEntries(days);
  };

  function handleFavorite() {
    const toggle = !favourite;
    setFavourite(toggle);
    setNewHabit({ ...newHabit, starred: toggle });
  }

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div
        className={`new-habit-modal ${props.show ? 'show' : ''}}`}
        onClick={props.onClose}
        ref={nodeRef}
      >
        <div
          className="modal-content-habit-form"
          onClick={(e) => e.stopPropagation()}
        >
          <form className="center-form">
            <div className="top">
              <div className="modal-header">
                <h4 className="modal-title-habit">Create Habit</h4>
              </div>

              <div className="modal-body-habit">
                <input
                  className="habit-title"
                  type="text"
                  placeholder="Your Habit title"
                  onChange={(ev) => handleTitle(ev.target.value)}
                ></input>

                <input
                  className="habit-description"
                  type="text"
                  placeholder="Description"
                  onChange={(ev) => handleDescription(ev.target.value)}
                ></input>

                <div
                  onClick={() => {
                    handleFavorite(favourite);
                  }}
                >
                  <h3 className="favourite-habit-text">
                    A favourite Habit? {'   '}
                    {favourite ? <ImStarFull /> : <ImStarEmpty />}{' '}
                  </h3>
                </div>
              </div>
            </div>
          </form>

          <div className="modal-footer">
            <button
              className="submit-button-habit"
              onClick={(event) => createHabit(event)}
              disabled={buttonDisabled}
            >
              Submit
            </button>
            <button className="close-button-habit" onClick={props.onClose}>
              Close
            </button>
          </div>
          {}
        </div>
      </div>
    </CSSTransition>
  );
};

export default NewHabitForm;
