import React, { useState } from "react";
import { format, set } from "date-fns";
import EventsBoard from "../components/eventsBoard/EventsBoard"
import QuoteComponent from "../components/quoteComponent/QuoteComponent"
import WeatherComponent from "../components/weatherComponent/WeatherComponent"
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
            <div className="greeting-weather-div">
            <div className="greeting">
                <h3 className="greeting-date-week"> {greeting} <br></br> Is {format(today, "EEEE")} {format(today, "LLLL do")}  </h3>   
            </div>
            <div><WeatherComponent /></div>
            </div>
          </div>
        </div>

        <div className="action-area">
          <div className="center-calendar">
            <h2 className="section-title">
              {/* <img src="/calendar.png" className="calendar-logo" alt="calendar-title"> </img> */}
              My Calendar
            </h2>

            <div className="calendar-event-div">
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
                formatShortWeekday={(locale, value) => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][value.getDay()]}

                next2Label={null}
                prev2Label={null}

                tileClassName={({ date }) => {
                  if (date.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 2) == "Sa" || date.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 2) == "Su") {
                    return 'highlight';
                  }
                }

                }
              />
              <EventsBoard />
            </div>
            <div className='div-date'>
              <p className='selected-date'>
                <span className='bold'>Selected date</span> {' '}<br />
                <span className="selected-date-first">{date.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</span><br />
                <span className="selected-date-second">{date.toLocaleString('en-US', { year: 'numeric' })}</span>
              </p>
              <div className="quoteDiv">
              <QuoteComponent />
            
              
              </div>
            </div>
           
          </div>
         
        </div>
       
      </div>
    </body>


  );
}


