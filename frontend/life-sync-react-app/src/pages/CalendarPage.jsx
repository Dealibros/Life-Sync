import React, { useState } from "react";
import { format, set } from "date-fns";
import EventsBoard from "../components/eventsBoard/EventsBoard"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css';
import '../styles/CalendarReact.css';



export default function CalendarPage() {
  const today = new Date();
  const [date, setDate] = useState(new Date());

  let greeting = "";
  if (today.getHours() < 12) {
    greeting = "Good morning!";
  } else if (today.getHours() < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }


  // Returns the month after and before
  const nextMonth = `${(date.getMonth() + 1) % 12 + 1}, ${date.getDay()} ${date.getFullYear()}`.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
  const previousMonth = `${(date.getMonth() + 11) % 12 + 1}, ${date.getDay()} ${date.getFullYear()};`.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <body style={{
      backgroundImage: `url(/backgrounds/watercolor-${date.toLocaleString('en-US', { month: 'long' })}.jpg`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

      <div className="App">
        <div className="wrapper">
          <div className="top-banner">
            <div className="greeting">
              {/* <img src="/media/planner_logo.png" className="planner" alt="planner" width="6rem" height="65rem"></img> */}
              <div>
                <h2 className="welcome">{greeting}</h2>
                <h3 className="main-date">{format(today, "EEEE, LLLL do").toLowerCase()}.</h3></div>
            </div>
          </div>
        </div>

        <div className="action-area">
          <div className="centerCalendar">
            <h2 className="section-title">Planner</h2>

            <div className="calendarEventDiv">
              <Calendar
                value={date}
                onChange={setDate}
                activeStartDate={date}
                onActiveStartDateChange={({ value, activeStartDate, action }) => {
                  if (action === 'next') {
                    setDate(new Date(activeStartDate))
                  }
                  if (action === 'prev') {
                    setDate(new Date(activeStartDate))
                  }
                }}
                // calendarType="ISO 8601"
                formatShortWeekday={(locale, value) => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][value.getDay()]}

                next2Label={null}
                prev2Label={null}

                tileClassName={({ date }) => {
                  if (date.toLocaleDateString('en-US', { weekday: 'long'}).slice(0,2) == "Sa" || date.toLocaleDateString('en-US', { weekday: 'long'}).slice(0,2) == "Su") {
                    return 'highlight';
                  }
                }
               
                }
              />
              <EventsBoard />
            </div>
            <div className='div-date'>
              <p className='selected-date'>
                <span className='bold'>Selected date</span> {' '}<br/>
                <strong>{date.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</strong><br />
                <strong>{date.toLocaleString('en-US', { year: 'numeric' })}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>


  );
}


