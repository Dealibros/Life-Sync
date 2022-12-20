
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import EventsBoard from "../components/eventsBoard/EventsBoard"
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css';
import '../styles/CalendarReact.css';






export default function CalendarPage() {
    const today = new Date();
    const [date, setDate] = useState(new Date());
    console.log(date)

  let greeting = "";
  if (today.getHours() < 12) {
    greeting = "Good morning!";
  } else if (today.getHours() < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  let month = "march"

  console.log(date.toLocaleString('en-US', {month:'long'}))

  return (
    <body style={{ 
    backgroundImage: `url(/backgrounds/watercolor-${date.toLocaleString('en-US', {month:'long'})}.jpg` ,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>


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
     <h2 className="section-title">Planner</h2>
     <div className="action-area">
      <div className="centerCalendar">
     
      <Calendar onChange={setDate} value={date} defaultView='month' maxDetail='month' 
      nextLabel='>>' 
      nextAriaLabel='Go to next month'
      next2Label='>'
      next2AriaLabel='Go to next year'
      prevLabel='<<'
      prevAriaLabel='Go to prev month'
      prev2Label='<'
      prev2AriaLabel='Go to prev year'/>
      <EventsBoard/>
      </div>
      </div>
      <div className='div-date'>
      <p className='selected-date'>
        <span className='bold'>Selected date</span> {' '}<br/>
        <strong>{date.toLocaleString('en-US', {weekday:'long', day:'numeric', month: 'long'})}</strong><br/>
        <strong>{date.toLocaleString('en-US', {year:'numeric'})}</strong>
      </p>
      </div>
     </div>
   </body>

    
  );
}


