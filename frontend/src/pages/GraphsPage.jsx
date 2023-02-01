import '../styles/GraphsPage.css';
import DataForGraph from '../components/Graphs/DataForGraph';
import ResponsiveBumpGraph from '../components/Graphs/ResponsiveBumpGraph';
import ResponsiveLineGraph from '../components/Graphs/ResponsiveLineGraph';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import { days } from '../utils/days';

export default function GraphsPage() {
  days.map((element) => {
    const daysMonth = element.date.substring(
      element.date.length - 2,
      element.date.length,
    );
  });

  return (
    <>
      <div className="App">
        <NavBarTop />

        <div className="action-area">
          <div className="center-calendar">
            <h2 className="section-title">My Graphs</h2>
            {/* <ResponsiveLineGraph /> */}
            <ResponsiveBumpGraph />

            <div className="div-date"></div>
          </div>
        </div>
      </div>
    </>
  );
}
