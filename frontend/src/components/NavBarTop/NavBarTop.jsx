import 'react-calendar/dist/Calendar.css';
import './styles.css';
import { format } from 'date-fns';
import Weather from '../Weather/Weather';

export default function NavBarTop(user) {
  const today = new Date();

  let greeting = '';
  if (today.getHours() < 12) {
    greeting = 'Good morning';
  } else if (today.getHours() < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  const userFirstname = localStorage.getItem('user_firstname', user.firstname);

  return (
    <div className="wrapper">
      <div className="top-banner">
        <div className="greeting-weather-div">
          <div className="greeting">
            <h3 className="greeting-date-week">
              {' '}
              {greeting} {', '}
              {userFirstname}
              {'!'} <br></br> Is {format(today, 'EEEE')}{' '}
              {format(today, 'LLLL do')}{' '}
            </h3>
          </div>
          <div>
            <Weather cl />
          </div>
        </div>
      </div>
    </div>
  );
}
