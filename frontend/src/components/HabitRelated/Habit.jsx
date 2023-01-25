import './styles.css';
import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../apiFetch';
import DailyHabits from './DailyHabits';
import NewHabitForm from './NewHabitForm/NewHabitForm';

export default function Habit() {
  const [habits, setHabits] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    apiFetch('http://localhost:8080/api/habits/All', 'GET', null).then(
      (data) => {
        setHabits(data);
      },
    );
  }, []);

  return (
    <>
      <div className="all-habits">
        {habits.map((habit, index) => (
          <div className="habit-list" key={index}>
            <>
              <div className="habit-name">
                {habit.title} {habit.starred && '🌟'}
              </div>

              <div className="habit-description">{habit.description}</div>

              <DailyHabits
                className="daily-habits"
                habits={habit.habits}
                setHabits={setHabits}
                habitId={habit.habitId}
              />
            </>
          </div>
        ))}
      </div>
      <div className="button-add-event-div">
        <button className="button-add-event" onClick={() => setShow(true)}>
          {' '}
          +{' '}
        </button>
      </div>
      <NewHabitForm
        onClose={() => setShow(false)}
        show={show}
        habits={habits}
        setHabits={setHabits}
      />
    </>
  );
}
