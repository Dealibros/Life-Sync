import './styles.css';
import dayjs from 'dayjs';
import { apiFetch } from '../../apiFetch';

export default function DayHabitSquare({ day, setHabits }) {
  const dayInstance = dayjs().subtract(1, 'day');
  const current = dayInstance;
  const disabled = !dayjs(day.date).isAfter(current);

  const doneFunction = (id) => {
    apiFetch(
      `http://localhost:8080/api/dailyHabits/updateDailyHabit/${id}`,
      'PUT',
      JSON.stringify({ id }),
    ).then((data) => {
      apiFetch('http://localhost:8080/api/habits/All', 'GET', null).then(
        (data) => {
          setHabits(data);
        },
      );
    });
  };

  return (
    <>
      <div
        className={`habit-square ${
          day.done ? 'ticked-square' : disabled ? 'past-square' : 'white'
        }`}
        onClick={() => {
          doneFunction(day.id);
        }}
      >
        <div className="square">{new Date(day.date).getDate()}</div>
      </div>
    </>
  );
}
