import dayjs from 'dayjs';
import { apiFetch } from '../../apiFetch';

export default function DayHabitSquare({ day, habitId, habits, setHabits }) {
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
    <div
      className="habit-square"
      style={{
        backgroundColor: day.done ? 'purple' : disabled ? 'gray' : 'white',
      }}
      onClick={() => {
        console.log(day.id);
        // if (!disabled) {
        doneFunction(day.id);
        // }
      }}
    >
      <div className="square">{new Date(day.date).getDate()}</div>
    </div>
  );
}
