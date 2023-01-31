import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css';
import '../styles/CalendarReact.css';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { apiFetch } from '../apiFetch';
import EventsBoard from '../components/EventRelated/EventsBoard/EventsBoard';
import MoodSleepCheck from '../components/MoodSleepCheck/MoodSleepCheck';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import Quote from '../components/Quote/Quote';
import ImageLoader from './ImageLoader';
import Login from './Login';

export default function CalendarPage() {
  const initialCredentials = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
  };

  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState(initialCredentials);
  const [showMoodSleepCheck, setShowMoodSleepCheck] = useState(true);

  useEffect(() => {
    apiFetch(
      `http://localhost:8080/user/${localStorage.getItem('username')}`,
      'GET',
      null,
    ).then((data) => {
      setUser(data);
    });
  }, []);

  localStorage.setItem('user_id', user.id);
  localStorage.setItem('user_firstname', user.firstname);

  console.log('usercalendarpage', user);
  if (!localStorage.getItem('token')) {
    return <Login></Login>;
  } else {
    return (
      <div
        style={{
          backgroundImage: `url(/backgrounds/watercolor-${date.toLocaleString(
            'en-US',
            { month: 'long' },
          )}.jpg`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ImageLoader />
        <div className="App">
          <NavBarTop user={user} />

          <div className="action-area">
            <div className="center-calendar">
              <h2 className="section-title">My Calendar</h2>

              <div className="calendar-event-div">
                <Calendar
                  value={date}
                  onChange={setDate}
                  activeStartDate={date}
                  onActiveStartDateChange={({
                    value,
                    activeStartDate,
                    action,
                  }) => {
                    if (action === 'next') {
                      setDate(new Date(activeStartDate));
                    }
                    if (action === 'prev') {
                      setDate(new Date(activeStartDate));
                    }
                  }}
                  formatShortWeekday={(locale, value) =>
                    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][value.getDay()]
                  }
                  next2Label={null}
                  prev2Label={null}
                  tileClassName={({ date }) => {
                    if (
                      date
                        .toLocaleDateString('en-US', { weekday: 'long' })
                        .slice(0, 2) === 'Sa' ||
                      date
                        .toLocaleDateString('en-US', { weekday: 'long' })
                        .slice(0, 2) === 'Su'
                    ) {
                      return 'highlight';
                    }
                  }}
                />

                <MoodSleepCheck
                  onClose={() => setShowMoodSleepCheck(false)}
                  showMoodSleepCheck={showMoodSleepCheck}
                />

                <EventsBoard />
              </div>
              <div className="div-date">
                <p className="selected-date">
                  <span className="bold">Selected date</span> <br />
                  <span className="selected-date-first">
                    {date.toLocaleString('en-US', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}
                  </span>
                  <br />
                  <span className="selected-date-second">
                    {date.toLocaleString('en-US', { year: 'numeric' })}
                  </span>
                </p>
                <div className="quoteDiv">
                  <Quote />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
