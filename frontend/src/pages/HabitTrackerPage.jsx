import '../styles/HabitTrackerPage.css';
import Habit from '../components/HabitRelated/Habit';

export default function HabitTrackerPage() {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="App">
        <div className="wrapper"> </div>
        <div className="main">
          <h4 className="habit-page-title">Habit Tracker Page</h4>
          <Habit />
        </div>
      </div>
    </div>
  );
}