import DayHabitSquare from './DayHabitSquare';

export default function DailyHabits({ habits, setHabits, habitId }) {
  habits.sort(function (a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c - d;
  });

  return (
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
  );
}
