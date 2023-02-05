import '../styles/HabitTrackerPage.css';
import Habit from '../components/HabitRelated/Habit';
import NavBarTop from '../components/NavBarTop/NavBarTop';

export default function HabitTrackerPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#d4f3e4 ',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <NavBarTop />
        <div className="App">
          <div className="wrapper"> </div>
          <div className="main">
            <h4 className="habit-page-title">Habit Tracker Page</h4>
            <Habit />
          </div>
        </div>
      </div>
    </>
  );
}
