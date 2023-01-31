import '../styles/Profile.css';
import NavBarTop from '../components/NavBarTop/NavBarTop';

export default function Profile() {
  return (
    <>
      <div className="App">
        <NavBarTop />

        <div className="action-area">
          <div className="center-calendar">
            <h2 className="section-title">Profile</h2>
          </div>
        </div>
      </div>
    </>
  );
}
