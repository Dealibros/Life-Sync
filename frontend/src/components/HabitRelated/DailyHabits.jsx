import DayHabitSquare from './DayHabitSquare';

export default function DailyHabits({ habits, setHabits, habitId }) {
  habits.sort(function (a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c - d;
  });

  function countHabits() {
    let number = 0;
    habits.forEach((element) => {
      if (element.done === true) {
        number++;
      }
    });
    return number;
  }

  let total = countHabits();

  return (
    <>
      <div className="row">
        {habits.map((day, index) => (
          <div key={index}>
            <DayHabitSquare
              className="day-habit-quare"
              day={day}
              key={day.id}
              habits={habits}
              setHabits={setHabits}
              habitId={habitId}
            />
          </div>
        ))}
      </div>

      <div>
        {
          <h4 className="days-done">
            {total} / {habits.length}{' '}
          </h4>
        }
      </div>
    </>
  );
}
