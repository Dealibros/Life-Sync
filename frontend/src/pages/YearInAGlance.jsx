import '../styles/YearInAGlance.css';
import NavBarTop from '../components/NavBarTop/NavBarTop';

export default function YearInAGlance() {
  return (
    <>
      <div className="App">
        <NavBarTop />

        <div className="action-area">
          <div className="center-calendar">
            <h2 className="section-title">Year in Glance</h2>
          </div>
        </div>
      </div>
    </>
  );
}
